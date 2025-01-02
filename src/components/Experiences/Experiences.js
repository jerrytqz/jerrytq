import { useQuery } from '@tanstack/react-query';
import React from 'react';

import getRequest from '../../shared/api/getRequest';
import Divider from '../../shared/userInterfaces/Divider/Divider';
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import Experience from './Experience/Experience';
import classes from './Experiences.module.css';

const Experiences = () => {
  const {
    data: experiences,
    isLoading: fetchLoading,
    isError: hasFetchError,
    error: fetchError,
  } = useQuery({
    queryKey: ['experiences'],
    queryFn: () => getRequest(`fetch-experiences/`),
    select: (data) => data.experiences,
  });

  return (
    <section className={classes.Container}>
      <header className={classes.Header}>
        <h2 className={classes.Title}>Experience</h2>
        <Divider />
      </header>
      {fetchLoading ? (
        <LoadingSpinner
          style={{ fontSize: '9px', margin: '64px auto 0 auto' }}
        />
      ) : hasFetchError ? (
        <FetchError
          containerStyle={{
            boxSizing: 'border-box',
            width: '80%',
            margin: 'auto',
            maxWidth: '1000px',
          }}
          error={fetchError}
        />
      ) : (
        experiences.map((experience) => (
          <Experience
            key={experience.company + experience.startDate}
            imageUrl={experience.imageLink.url}
            imageAlt={experience.imageLink.alt}
            title={experience.title}
            dateRange={experience.startDate + ' - ' + experience.endDate}
            company={experience.company}
            location={experience.location}
          />
        ))
      )}
    </section>
  );
};

export default Experiences;
