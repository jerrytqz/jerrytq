import React from 'react';

import InternalFetchError from '../../../../api/utils/internalFetchError';
import Error from '../Error/Error';

const FetchError = (props) => {
  return (
    <Error
      title="Unavailable!"
      description={
        !props.error || props.error instanceof InternalFetchError
          ? 'The resource you requested could not be retrieved. Please try again later.'
          : props.error.message
      }
      homeButton={props.homeButton}
      containerStyle={props.containerStyle}
      titleStyle={props.titleStyle}
      descriptionStyle={props.descriptionStyle}
    />
  );
};

export default FetchError;
