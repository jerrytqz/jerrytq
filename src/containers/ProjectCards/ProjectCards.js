import { useQuery } from '@tanstack/react-query';
import React from 'react';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import getRequest from '../../shared/api/getRequest';
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import classes from './ProjectCards.module.css';

const ProjectCards = () => {
  const {
    data: projectCards,
    isLoading: fetchLoading,
    isError: hasFetchError,
    error: fetchError,
  } = useQuery({
    queryKey: ['projectCards'],
    queryFn: () => getRequest(`fetch-project-cards/`),
    select: (data) => data.projectCards,
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
    />
  ) : (
    <section className={classes.Container}>
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
    </section>
  );
};

export default ProjectCards;
