import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutation, useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import React, { useCallback, useMemo } from 'react';

import getRequest from '../../shared/api/getRequest';
import InternalFetchError from '../../shared/api/internalFetchError';
import postRequest from '../../shared/api/postRequest';
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import Button from '../../shared/userInterfaces/buttons/Button/Button';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import classes from './ContactForm.module.css';

const ContactForm = () => {
  const {
    data: form,
    isLoading: fetchLoading,
    isError: hasFetchError,
    error: fetchError,
  } = useQuery({
    queryKey: ['contact'],
    queryFn: () => getRequest(`contact/`),
    select: (data) =>
      parse(
        DOMPurify.sanitize(data.form, {
          USE_PROFILES: { html: true },
        }),
      ),
  });

  const {
    error: submitError,
    isError: hasSubmitError,
    isPending: submitLoading,
    isSuccess: submitSuccess,
    mutate: doPostRequest,
  } = useMutation({
    mutationFn: postRequest,
  });

  const submitHandler = useCallback(
    (event) => {
      event.preventDefault();
      doPostRequest({ endpoint: 'contact/', data: new FormData(event.target) });
    },
    [doPostRequest],
  );

  const errorForm = useMemo(
    () =>
      parse(
        DOMPurify.sanitize(hasSubmitError ? submitError.message : '', {
          USE_PROFILES: { html: true },
        }),
      ),
    [submitError, hasSubmitError],
  );

  let result = fetchLoading ? (
    <LoadingSpinner
      className={classes.LoadingSpinner}
      style={{ margin: '96px auto' }}
    />
  ) : hasFetchError ||
    (hasSubmitError && submitError instanceof InternalFetchError) ? (
    <FetchError
      error={hasFetchError ? fetchError : submitError}
      containerStyle={{ marginTop: '32px' }}
    />
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
            {hasSubmitError ? errorForm : form}
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
