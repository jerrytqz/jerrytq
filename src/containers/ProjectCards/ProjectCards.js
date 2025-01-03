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
    isLoading: queryLoading,
    isError: hasQueryError,
    error: queryError,
  } = useQuery({
    queryKey: ['projectCards'],
    queryFn: () => getRequest(`project-cards/`),
    select: (data) => data.projectCards,
  });

  return queryLoading ? (
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
  ) : hasQueryError ? (
    <FetchError
      containerStyle={{ marginTop: '64px' }}
      error={queryError}
      homeButton
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
