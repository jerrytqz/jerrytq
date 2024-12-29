import React from 'react';

import buttonClasses from '../Button/Button.module.css';
import linkClasses from './LinkButton.module.css';

const LinkButton = (props) => {
  return (
    <a
      className={[
        buttonClasses.Container,
        linkClasses.Container,
        props.className ? props.className : '',
      ]
        .join(' ')
        .trim()}
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
};

export default LinkButton;
