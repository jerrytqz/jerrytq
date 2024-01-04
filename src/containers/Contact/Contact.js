import React, { Component } from 'react';

import ContactHero from '../../components/ContactHero/ContactHero';
import ContactForm from '../../components/ContactForm/ContactForm';

class Contact extends Component {
  render() {
    return (
      <>
        <ContactHero />
        <ContactForm />
      </>
    );
  }
}

export default Contact;
