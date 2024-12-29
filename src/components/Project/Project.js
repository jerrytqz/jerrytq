import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BACKEND_BASE_DIR } from '../../shared/constants';
import Divider from '../../shared/userInterfaces/Divider/Divider';
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import MultiArea from '../../shared/userInterfaces/MultiArea/MultiArea';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import Technology from '../Technology/Technology';
import classes from './Project.module.css';
import Slideshow from './Slideshow/Slideshow';

const Project = () => {
  const { slug } = useParams();
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [fetchErrorMsg, setFetchErrorMsg] = useState(null);
  const [project, setProject] = useState({});

  useEffect(() => {
    setFetchLoading(true);
    setFetchError(false);
    fetch(`${BACKEND_BASE_DIR}/fetch-project/?slug=${slug}`, { method: 'GET' })
      .then((response) => {
        if (!response.ok)
          return response.json().then((result) => {
            if (response.status === 404) setFetchErrorMsg(result.error);
            throw new Error(result.error);
          });
        else return response.json();
      })
      .then((result) => {
        setProject(result.project);
        setFetchLoading(false);
      })
      .catch(() => {
        setFetchError(true);
        setFetchLoading(false);
      });
  }, [slug]);

  return fetchLoading ? (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <LoadingSpinner className={classes.LoadingSpinner} />
    </div>
  ) : fetchError ? (
    <FetchError
      containerStyle={{ marginTop: '64px' }}
      description={fetchErrorMsg}
      homeButton
    />
  ) : (
    <section className={classes.Container}>
      <header className={classes.Header}>
        <h2 className={classes.Name}>{project.name}</h2>
        <div className={classes.CreditsDate}>
          <p className={classes.Credits}>
            <FontAwesomeIcon
              icon={faUser}
              className={classes.Icon}
              fixedWidth
            />
            {project.projectCredits.join(', ')}
          </p>
          <p className={classes.Date}>
            <FontAwesomeIcon
              icon={faCalendar}
              className={classes.Icon}
              fixedWidth
            />
            {project.startDate}
          </p>
        </div>
      </header>
      <Divider />
      <div className={classes.Content}>
        <Slideshow imageLinks={project.imageLinks} />
        <div className={classes.DescriptionArea}>
          <p className={classes.Description}>{project.description}</p>
          {project.projectLinks.WEB ? (
            <a
              className={classes.WebsiteButton}
              href={project.projectLinks.WEB}
              target="_blank"
              rel="noreferrer"
            >
              ✨ See it live! ✨
            </a>
          ) : null}
        </div>
      </div>
      <footer className={classes.Footer}>
        <MultiArea
          areas={[
            {
              title: 'Technologies',
              body: (
                <div className={classes.Technologies}>
                  {project.technologies.map((tech) => (
                    <Technology
                      key={tech.name}
                      imageUrl={tech.imageLink.url}
                      imageAlt={tech.imageLink.alt}
                    />
                  ))}
                </div>
              ),
            },
            { title: 'Tags', body: <p>Coming soon!</p> },
            {
              title: 'Links',
              body:
                (project.projectLinks.WEB &&
                  Object.keys(project.projectLinks).length >= 2) ||
                (!project.projectLinks.WEB &&
                  Object.keys(project.projectLinks).length >= 1) ? (
                  <div className={classes.Links}>
                    {project.projectLinks.GIT && (
                      <a
                        className={classes.SocialMediaIcon}
                        href={project.projectLinks.GIT}
                        aria-label="GitHub repository"
                      >
                        <FontAwesomeIcon icon={faGithub} size="3x" fixedWidth />
                      </a>
                    )}
                  </div>
                ) : (
                  <p>There are no other links for this project.</p>
                ),
            },
          ]}
        />
      </footer>
    </section>
  );
};

export default Project;
