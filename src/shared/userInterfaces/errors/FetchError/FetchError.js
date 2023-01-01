import React from 'react'; 

import Error from '../Error/Error';

const FetchError = (props) => {
    return (
        <Error 
            title="Not Available!" 
            description={props.description || 'The resource you requested could not be retrieved. Please try again later.'}
            containerStyle={props.containerStyle}
            titleStyle={props.titleStyle}
            descriptionStyle={props.descriptionStyle}
            homeButton={props.homeButton}
        />
    );
};

export default FetchError; 
