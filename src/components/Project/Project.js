import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

import getRequest from '../../shared/api/getRequest';
import Divider from '../../shared/userInterfaces/Divider/Divider';
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import MultiArea from '../../shared/userInterfaces/MultiArea/MultiArea';
import LinkButton from '../../shared/userInterfaces/buttons/LinkButton/LinkButton';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import Technology from '../Technology/Technology';
import classes from './Project.module.css';
import Slideshow from './Slideshow/Slideshow';

const Project = () => {
  const { slug } = useParams();

  const {
    data: project,
    isLoading: fetchLoading,
    isError: hasFetchError,
    error: fetchError,
  } = useQuery({
    queryKey: ['project', slug],
    queryFn: () => getRequest(`fetch-project/`, { slug: slug }),
    select: (data) => data.project,
  });

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
  ) : hasFetchError ? (
    <FetchError
      containerStyle={{ marginTop: '64px' }}
      description={fetchError.message}
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
            <LinkButton
              className={classes.WebsiteButton}
              href={project.projectLinks.WEB}
            >
              ✨ See it live! ✨
            </LinkButton>
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
