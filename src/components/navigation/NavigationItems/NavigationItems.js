import React, { useEffect, useState } from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem.js';
import DropdownItem from './DropdownItem/DropdownItem.js';
import { BACKEND_BASE_DIR } from '../../../shared/constants';
import {
  faCommentDots,
  faHome,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';

const NavigationItems = (props) => {
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [projectNames, setProjectNames] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_BASE_DIR}/fetch-project-names/`, { method: 'GET' })
      .then((response) => {
        if (!response.ok)
          return response.json().then((result) => {
            throw new Error(result.error);
          });
        else return response.json();
      })
      .then((result) => {
        setProjectNames(
          result.projectNames.concat({ name: 'All Projects >>', slug: '' })
        );
        setFetchLoading(false);
      })
      .catch(() => {
        setFetchError(true);
        setFetchLoading(false);
      });
  }, []);

  return (
    <ul
      className={props.toolbar ? classes.ContainerToolbar : classes.Container}
    >
      <NavigationItem link="/" end toolbar={props.toolbar} icon={faHome}>
        Home
      </NavigationItem>
      <DropdownItem
        baseLink="/projects"
        links={projectNames}
        name="Projects"
        toolbar={props.toolbar}
        icon={faScrewdriverWrench}
        fetchLoading={fetchLoading}
        fetchError={fetchError}
      />
      <NavigationItem
        link="/contact"
        toolbar={props.toolbar}
        icon={faCommentDots}
      >
        Contact
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
