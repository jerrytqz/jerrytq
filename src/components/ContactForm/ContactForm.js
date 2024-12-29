import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';

import { BACKEND_BASE_DIR } from '../../shared/constants';
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import Button from '../../shared/userInterfaces/buttons/Button/Button';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import classes from './ContactForm.module.css';

const ContactForm = () => {
  const [form, setForm] = useState(null);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setFetchLoading(true);
    setFetchError(false);
    fetch(`${BACKEND_BASE_DIR}/contact/`, { method: 'GET' })
      .then((response) => response.json())
      .then((result) => {
        const cleanHtmlString = DOMPurify.sanitize(result.form, {
          USE_PROFILES: { html: true },
        });
        setForm(parse(cleanHtmlString));
        setFetchLoading(false);
      })
      .catch(() => {
        setFetchError(true);
        setFetchLoading(false);
      });
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    setSubmitLoading(true);
    const data = new FormData(event.target);
    fetch(`${BACKEND_BASE_DIR}/contact/`, { method: 'POST', body: data })
      .then((response) => {
        if (!response.ok)
          return response.json().then((result) => {
            const cleanHtmlString = DOMPurify.sanitize(result.form, {
              USE_PROFILES: { html: true },
            });
            setForm(parse(cleanHtmlString));
            setSubmitLoading(false);
          });
        else {
          setSubmitSuccess(true);
          setSubmitLoading(false);
        }
      })
      .catch(() => {
        setFetchError(true);
        setSubmitLoading(false);
      });
  };

  let result = fetchLoading ? (
    <LoadingSpinner
      className={classes.LoadingSpinner}
      style={{ margin: '96px auto' }}
    />
  ) : fetchError ? (
    <FetchError />
  ) : (
    <section className={classes.Container}>
      {submitLoading ? (
        <LoadingSpinner className={classes.LoadingSpinner} />
      ) : (
        <>
          <p className={classes.Description}>
            Welcome! I'm thrilled to connect with you. Whether you have
            inquiries, suggestions, comments, or simply want to say hello, this
            contact form is the perfect gateway.
            <br />
            <br />
            You can also reach me through{' '}
            <a className={classes.EmailLink} href="mailto:contact@jerrytq.com">
              email
            </a>
            .
            <br />
            <br />
            I'm looking forward to hearing from you. Let's start a conversation!
          </p>
          <form
            className={classes.Form}
            onSubmit={(event) => submitHandler(event)}
          >
            {form}
            <Button className={classes.SubmitButton}>Submit</Button>
          </form>
        </>
      )}
    </section>
  );

  if (submitSuccess)
    result = (
      <section className={classes.SubmitMsgContainer}>
        <FontAwesomeIcon
          icon={faCircleCheck}
          size="7x"
          className={classes.CheckMark}
        />
        <div className={classes.SubmitMsg}>
          <h2 className={classes.SubmitMsgTitle}>Thank you!</h2>
          <p className={classes.SubmitMsgDescription}>
            Your message has been received.
          </p>
        </div>
      </section>
    );

  return result;
};

export default ContactForm;
