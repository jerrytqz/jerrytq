import React from 'react';
import { NavLink } from 'react-router-dom';
import LoadingSpinner from '../../../../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import FetchError from '../../../../../shared/userInterfaces/errors/FetchError/FetchError';

import classes from './DropdownArea.module.css';

const NUM_COLS = 4;

const DropdownArea = (props) => {
  const linksPerCol = Math.floor(props.links.length / NUM_COLS);
  const remainder = props.links.length % NUM_COLS;
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
      ].join(' ')}
      style={
        !props.toolbar && !props.fetchLoading && !props.fetchError
          ? { paddingLeft: '32px' }
          : {}
      }
    >
      {props.fetchLoading ? (
        <LoadingSpinner
          style={{
            fontSize: props.toolbar ? '9px' : '6px',
            margin: '26px auto',
          }}
        />
      ) : props.fetchError ? (
        props.toolbar ? (
          <FetchError containerStyle={{ margin: 'auto' }} />
        ) : (
          <FetchError
            containerStyle={{ padding: '0' }}
            titleStyle={{ fontSize: '22px' }}
            descriptionStyle={{ fontSize: '16px' }}
          />
        )
      ) : props.toolbar ? (
        cols.map((col) => {
          start = end;
          end = start + linksPerCol + (col < remainder ? 1 : 0);
          return (
            <div className={classes.Col} key={props.links[col].name}>
              {props.links.slice(start, end).map((link) => (
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
        props.links.map((link) => (
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
