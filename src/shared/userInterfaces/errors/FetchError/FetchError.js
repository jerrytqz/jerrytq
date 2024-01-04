import React from 'react';

import Error from '../Error/Error';

const FetchError = (props) => {
  return (
    <Error
      title="Not Available!"
      description={
        props.description ||
        'The resource you requested could not be retrieved. Please try again later.'
      }
      homeButton={props.homeButton}
      containerStyle={props.containerStyle}
      titleStyle={props.titleStyle}
      descriptionStyle={props.descriptionStyle}
    />
  );
};

export default FetchError;
