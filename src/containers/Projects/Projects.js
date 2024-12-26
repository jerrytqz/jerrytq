import React, { useState, useEffect } from 'react';

import classes from './Projects.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import { BACKEND_BASE_DIR } from '../../shared/constants';

const Projects = () => {
  const [projects, setProjects] = useState({});
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
        setProjects(result.projectCards);
        setFetchLoading(false);
      })
      .catch(() => {
        setFetchError(true);
        setFetchLoading(false);
      });
  }, []);

  return (
    <div className={classes.Container}>
      {fetchLoading ? (
        <LoadingSpinner
          style={{ fontSize: '9px', margin: '64px auto 0 auto' }}
        />
      ) : fetchError ? (
        <FetchError description={fetchErrorMsg} />
      ) : (
        projects.map((project) => (
          <ProjectCard
            key={project.slug}
            imageUrl={project.imageLink.url}
            imageAlt={project.imageLink.alt}
            name={project.name}
            slug={project.slug}
            shortDescription={project.shortDescription}
          />
        ))
      )}
    </div>
  );
};

export default Projects;
