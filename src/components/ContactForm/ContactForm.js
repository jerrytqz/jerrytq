import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

import classes from './ContactForm.module.css'; 
import { BACKEND_BASE_DIR } from '../../shared/constants';
import LoadingSpinner from '../../shared/userInterfaces/LoadingSpinner/LoadingSpinner';
import FetchError from '../../shared/userInterfaces/errors/FetchError/FetchError';
import Button from '../../shared/userInterfaces/Button/Button';

const ContactForm = () => {
    const [form, setForm] = useState(null);
    const [fetchLoading, setFetchLoading] = useState(true);
    const [fetchError, setFetchError] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    useEffect(() => {
        setFetchLoading(true);
        setFetchError(false);
        fetch(`${BACKEND_BASE_DIR}/contact/`, {method: 'GET'})
            .then(response => response.json())
            .then(result => {
                const cleanHtmlString = DOMPurify.sanitize(result.form, { USE_PROFILES: { html: true } });
                setForm(parse(cleanHtmlString));
                setFetchLoading(false);
            }).catch(() => {
                setFetchError(true);
                setFetchLoading(false);
            });
    }, []);

    const submitHandler = (event) => {
        event.preventDefault();
        setSubmitLoading(true);
        const data = new FormData(event.target);
        fetch(`${BACKEND_BASE_DIR}/contact/`, {method: 'POST', body: data})
            .then(response => {
                if (!response.ok) return response.json().then(result => { 
                    const cleanHtmlString = DOMPurify.sanitize(result.form, { USE_PROFILES: { html: true } });
                    setForm(parse(cleanHtmlString));
                    setSubmitLoading(false);
                });
                else {
                    setSubmitSuccess(true);
                    setSubmitLoading(false);
                }
            }).catch(() => {
                setFetchError(true);
                setSubmitLoading(false);
            });
    };

    let result = (fetchLoading ? <LoadingSpinner style={{fontSize: '12px', margin: '64px auto 0 auto'}}/> : fetchError ? <FetchError/> :
        <section className={classes.Container}>
            <form className={classes.Form} onSubmit={(event) => submitHandler(event)}>
                {submitLoading ? <LoadingSpinner style={{fontSize: '12px', margin: '200px auto'}}/> : 
                    <>
                        <div>
                            <fieldset>
                                <legend>Name:</legend>
                                <input id="id_sender_name_0" required="" name="sender_name_0" type="text"/>
                                <input id="id_sender_name_1" required="" name="sender_name_1" type="text"/>
                            </fieldset>
                        </div>
                        {form}
                        <Button buttonClass={classes.SubmitButton}>Submit</Button>
                    </>
                }
            </form>
        </section>
    );

    if (submitSuccess) result = (
        <section className={classes.SubmitMsgContainer}>
            <h2 className={classes.SubmitMsgTitle}>Thank you!</h2>
            <p className={classes.SubmitMsgDescription}>Your message has been received.</p>
        </section>
    );

    return result;
};

export default ContactForm;
