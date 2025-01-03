import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import getRequest from '../../shared/api/getRequest';
import Divider from '../../shared/userInterfaces/Divider/Divider';
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import Course from './Course/Course';
import classes from './Courses.module.css';

const TERM_NAMES = ['1A', '1B', 'WT1', '2A', 'WT2', '2B', 'WT3', '3A'];

const Courses = () => {
  const [termName, setTermName] = useState(TERM_NAMES[TERM_NAMES.length - 1]);

  const {
    data: courses,
    isLoading: fetchLoading,
    isError: hasFetchError,
    error: fetchError,
  } = useQuery({
    queryKey: ['courses', termName],
    queryFn: () => getRequest(`courses/`, { termName: termName }),
    select: (data) => data.courses,
  });

  return (
    <section className={classes.Container}>
      <header className={classes.Header}>
        <h2 className={classes.Title}>Courses</h2>
        <Divider />
      </header>
      <label
        className={[classes.TermNameSelectWrapper, classes.Min768None].join(
          ' ',
        )}
      >
        Term
        <select
          className={classes.TermNameSelect}
          value={termName}
          onChange={(event) => {
            setTermName(event.target.value);
          }}
        >
          {TERM_NAMES.map((termName) => (
            <option key={`${termName}0`} value={termName}>
              {termName}
            </option>
          ))}
        </select>
      </label>
      <table className={classes.Table}>
        <tbody>
          <tr>
            <th
              className={[classes.TableHeader, classes.Min768TableCell].join(
                ' ',
              )}
            >
              <label className={classes.TermNameSelectWrapper}>
                Term
                <select
                  className={classes.TermNameSelect}
                  value={termName}
                  onChange={(event) => {
                    setTermName(event.target.value);
                  }}
                >
                  {TERM_NAMES.map((termName) => (
                    <option key={`${termName}1`} value={termName}>
                      {termName}
                    </option>
                  ))}
                </select>
              </label>
            </th>
            <th className={classes.TableHeader}>Name</th>
            <th className={classes.TableHeader}>Description</th>
          </tr>
          {fetchLoading || hasFetchError
            ? null
            : courses.map((course, index) => (
                <Course
                  key={course.name}
                  style={
                    index % 2 === 1 ? { backgroundColor: '#e6e6e6' } : null
                  }
                  term={course.term}
                  name={course.name}
                  description={course.description}
                />
              ))}
        </tbody>
      </table>
      {fetchLoading ? (
        <LoadingSpinner
          style={{ fontSize: '9px', margin: '64px auto 0 auto' }}
        />
      ) : null}
      {hasFetchError ? (
        <FetchError
          containerStyle={{
            boxSizing: 'border-box',
            width: '80%',
            margin: 'auto',
            maxWidth: '1000px',
          }}
          error={fetchError}
        />
      ) : null}
    </section>
  );
};

export default Courses;
