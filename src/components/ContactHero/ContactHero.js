import React from 'react';

import classes from './ContactHero.module.css';

const ContactHero = () => {
  return (
    <section className={classes.Container}>
      <header className={classes.Header}>
        <h1 className={classes.Title}>Contact Me!</h1>
      </header>
    </section>
  );
};

export default ContactHero;
