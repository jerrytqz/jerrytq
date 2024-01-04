import React from 'react';

import classes from './ContactHero.module.css';

const ContactHero = () => {
  return (
    <section className={classes.Container}>
      <header className={classes.Header}>
        <h1 className={classes.Title}>Contact Me!</h1>
        <h2 className={classes.Subtitle}>
          You can also reach out to me at{' '}
          <a className={classes.Email} href="mailto:contact@jerrytq.com">
            contact@jerrytq.com
          </a>
          .
        </h2>
      </header>
    </section>
  );
};

export default ContactHero;
