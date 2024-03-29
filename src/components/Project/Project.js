import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import classes from './Project.module.css';
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import { BACKEND_BASE_DIR } from '../../shared/constants';
import Button from '../../shared/userInterfaces/Button/Button';
import Slideshow from './Slideshow/Slideshow';

import MultiArea from '../../shared/userInterfaces/MultiArea/MultiArea';
import Technology from '../Technology/Technology';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
      <hr />
      <div className={classes.Content}>
        <Slideshow imageLinks={project.imageLinks} />
        <div className={classes.DescriptionArea}>
          <p className={classes.Description}>{project.description}</p>
          {project.projectLinks.WEB ? (
            <a
              className={classes.WebsiteButtonContainer}
              href={project.projectLinks.WEB}
              target="_blank"
              rel="noreferrer"
            >
              <Button className={classes.WebsiteButton}>
                ✨ See it live! ✨
              </Button>
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
