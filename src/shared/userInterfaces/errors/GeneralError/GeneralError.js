import React from 'react';

import Error from '../Error/Error';

const GeneralError = () => {
  return (
    <Error
      title="Oh, No!"
      description="Something went wrong! Please try refreshing or going back to home."
      homeButton
      containerStyle={{ margin: '64px 0' }}
    />
  );
};

export default GeneralError;
