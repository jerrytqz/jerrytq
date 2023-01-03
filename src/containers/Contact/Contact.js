import React, { Component } from 'react'; 

import ContactHero from '../../components/ContactHero/ContactHero';
import { BACKEND_BASE_DIR } from '../../shared/constants';

class Contact extends Component {

    submitHandler = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        try {
            const response = await fetch(`${BACKEND_BASE_DIR}/contact/`, {
                method: 'POST',
                body: data
            });
            const result = response;
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    render() { 
        return (
            <>
                <ContactHero/>
                {/* <form onSubmit={(event) => this.submitHandler(event)}>
                    <label>
                        Your name:
                        <input type="text" name="name" required/>
                    </label>
                </form> */}
            </>
        );
    }
}

export default Contact;  
