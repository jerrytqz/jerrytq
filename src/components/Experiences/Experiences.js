import React, { useState, useEffect } from 'react';

import classes from './Experiences.module.css';
import Experience from './Experience/Experience';
import { BACKEND_BASE_DIR } from '../../shared/constants';
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';

const Experiences = () => {
  const [experiences, setExperiences] = useState({});
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [fetchErrorMsg, setFetchErrorMsg] = useState(null);

  useEffect(() => {
    fetch(`${BACKEND_BASE_DIR}/fetch-experiences/`, { method: 'GET' })
      .then((response) => {
        if (!response.ok)
          return response.json().then((result) => {
            if (response.status === 404) setFetchErrorMsg(result.error);
            throw new Error(result.error);
          });
        else return response.json();
      })
      .then((result) => {
        setExperiences(result.experiences);
        setFetchLoading(false);
      })
      .catch(() => {
        setFetchError(true);
        setFetchLoading(false);
      });
  }, []);

  return (
    <section className={classes.Container}>
      <header className={classes.Header}>
        <h2 className={classes.Title}>Experience</h2>
        <hr />
      </header>
      {fetchLoading ? (
        <LoadingSpinner
          style={{ fontSize: '9px', margin: '64px auto 0 auto' }}
        />
      ) : fetchError ? (
        <FetchError description={fetchErrorMsg} />
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
