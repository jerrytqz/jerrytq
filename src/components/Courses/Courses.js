import React, { useEffect, useState } from 'react';

import Course from './Course/Course';
import classes from './Courses.module.css';
import { BACKEND_BASE_DIR } from '../../shared/constants';
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import Divider from '../../shared/userInterfaces/Divider/Divider';

const TERM_NAMES = ['1A', '1B', 'WT1', '2A', 'WT2', '2B', 'WT3', '3A'];

const Courses = () => {
  const [termName, setTermName] = useState(TERM_NAMES[TERM_NAMES.length - 1]);
  const [courses, setCourses] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [fetchErrorMsg, setFetchErrorMsg] = useState(null);

  useEffect(() => {
    setFetchLoading(true);
    setFetchError(false);
    fetch(`${BACKEND_BASE_DIR}/fetch-courses/?termName=${termName}`, {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok)
          return response.json().then((result) => {
            if (response.status === 404) setFetchErrorMsg(result.error);
            throw new Error(result.error);
          });
        else return response.json();
      })
      .then((result) => {
        setCourses(result.courses);
        setFetchLoading(false);
      })
      .catch(() => {
        setFetchError(true);
        setFetchLoading(false);
      });
  }, [termName]);

  return (
    <section className={classes.Container}>
      <header className={classes.Header}>
        <h2 className={classes.Title}>Courses</h2>
        <Divider />
      </header>
      <label
        className={[classes.TermNameSelectWrapper, classes.Min768None].join(
          ' '
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
                ' '
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
          {fetchLoading || fetchError
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
      {fetchError ? (
        <FetchError
          containerStyle={{
            boxSizing: 'border-box',
            width: '80%',
            margin: 'auto',
            maxWidth: '1000px',
          }}
          description={fetchErrorMsg}
        />
      ) : null}
    </section>
  );
};

export default Courses;
