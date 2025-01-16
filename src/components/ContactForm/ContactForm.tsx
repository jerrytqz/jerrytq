import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutation, useQuery } from '@tanstack/react-query';
import parse from 'html-react-parser';
import { FormEvent, useCallback, useMemo } from 'react';

import { IContactFormGet, IContactFormPost } from '../../api/interfaces';
import getRequest from '../../api/requests/getRequest';
import postRequest from '../../api/requests/postRequest';
import InternalFetchError from '../../api/utility/internalFetchError';
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import Button from '../../shared/userInterfaces/buttons/Button/Button';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import classes from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  const {
    data: form,
    isLoading: queryLoading,
    isError: hasQueryError,
    error: queryError,
  } = useQuery({
    queryKey: ['contact'],
    queryFn: () => getRequest<IContactFormGet>(`contact/`),
    select: (data) => parse(data.form),
  });

  const {
    error: submitError,
    isError: hasSubmitError,
    isPending: submitLoading,
    isSuccess: submitSuccess,
    mutate: doPostRequest,
  } = useMutation({
    mutationFn: postRequest<IContactFormPost>,
  });

  const submitHandler = useCallback(
    (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      const formElement = event.target as HTMLFormElement;
      doPostRequest({ endpoint: 'contact/', data: new FormData(formElement) });
    },
    [doPostRequest],
  );

  const errorForm = useMemo(
    () => parse(hasSubmitError ? submitError.message : ''),
    [submitError, hasSubmitError],
  );

  let result = queryLoading ? (
    <LoadingSpinner
      className={classes.LoadingSpinner}
      style={{ margin: '96px auto' }}
    />
  ) : hasQueryError ||
    (hasSubmitError && submitError instanceof InternalFetchError) ? (
    <FetchError
      error={hasQueryError ? queryError : submitError}
      containerStyle={{ margin: '32px 0' }}
      homeButton
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
