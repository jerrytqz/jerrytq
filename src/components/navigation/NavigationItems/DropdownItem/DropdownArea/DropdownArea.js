import React from 'react';
import { NavLink } from 'react-router-dom';

import { useProjectNames } from '../../../../../shared/context/ProjectNamesContext';
import LoadingSpinner from '../../../../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import FetchError from '../../../../../shared/userInterfaces/errors/FetchError/FetchError';
import classes from './DropdownArea.module.css';

const NUM_COLS = 4;

const DropdownArea = (props) => {
  const {
    projectNames: links,
    queryLoading,
    hasQueryError,
    queryError,
  } = useProjectNames();

  const linksPerCol = Math.floor(links.length / NUM_COLS);
  const remainder = links.length % NUM_COLS;
  const cols = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < NUM_COLS; i++) {
    cols.push(i);
  }

  return (
    <div
      className={[
        props.toolbar ? classes.ContainerToolbar : classes.Container,
        props.show ? classes.Show : '',
      ]
        .join(' ')
        .trim()}
      style={
        !props.toolbar && !queryLoading && !hasQueryError
          ? { paddingLeft: '32px' }
          : {}
      }
    >
      {queryLoading ? (
        <LoadingSpinner
          style={{
            fontSize: props.toolbar ? '9px' : '6px',
            margin: '26px auto',
          }}
        />
      ) : hasQueryError ? (
        props.toolbar ? (
          <FetchError error={queryError} containerStyle={{ margin: 'auto' }} />
        ) : (
          <FetchError
            error={queryError}
            containerStyle={{ padding: '0' }}
            titleStyle={{ fontSize: '22px', textAlign: 'left' }}
            descriptionStyle={{ fontSize: '16px', textAlign: 'left' }}
          />
        )
      ) : props.toolbar ? (
        cols.map((col) => {
          start = end;
          end = start + linksPerCol + (col < remainder ? 1 : 0);
          return (
            <div className={classes.Col} key={links[col].name}>
              {links.slice(start, end).map((link) => (
                <NavLink
                  key={link.name}
                  to={
                    link.slug
                      ? `${props.baseLink}/${link.slug}`
                      : `${props.baseLink}`
                  }
                  className={({ isActive }) =>
                    [
                      props.toolbar ? classes.LinkToolbar : classes.Link,
                      isActive ? classes.active : '',
                    ].join(' ')
                  }
                  end
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          );
        })
      ) : (
        links.map((link) => (
          <NavLink
            key={link.name}
            to={
              link.slug ? `${props.baseLink}/${link.slug}` : `${props.baseLink}`
            }
            className={({ isActive }) =>
              [
                props.toolbar ? classes.LinkToolbar : classes.Link,
                isActive ? classes.active : '',
              ].join(' ')
            }
            end
          >
            {link.name}
          </NavLink>
        ))
      )}
    </div>
  );
};

export default DropdownArea;
