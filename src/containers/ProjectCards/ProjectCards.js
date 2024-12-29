import React, { useEffect, useState } from 'react';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { BACKEND_BASE_DIR } from '../../shared/constants';
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import classes from './ProjectCards.module.css';

const ProjectCards = () => {
  const [projectCards, setProjectCards] = useState({});
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [fetchErrorMsg, setFetchErrorMsg] = useState(null);

  useEffect(() => {
    fetch(`${BACKEND_BASE_DIR}/fetch-project-cards/`, { method: 'GET' })
      .then((response) => {
        if (!response.ok)
          return response.json().then((result) => {
            if (response.status === 404) setFetchErrorMsg(result.error);
            throw new Error(result.error);
          });
        else return response.json();
      })
      .then((result) => {
        setProjectCards(result.projectCards);
        setFetchLoading(false);
      })
      .catch(() => {
        setFetchError(true);
        setFetchLoading(false);
      });
  }, []);

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
    />
  ) : (
    <div className={classes.Container}>
      {projectCards.map((projectCard) => (
        <ProjectCard
          key={projectCard.slug}
          imageUrl={projectCard.imageLink.url}
          imageAlt={projectCard.imageLink.alt}
          name={projectCard.name}
          slug={projectCard.slug}
          shortDescription={projectCard.shortDescription}
        />
      ))}
    </div>
  );
};

export default ProjectCards;
