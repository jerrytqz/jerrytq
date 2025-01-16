import React from 'react';

import Error from '../Error/Error';

const NotFoundError = () => {
  return (
    <Error
      title="404"
      description="The page you requested could not be found!"
      homeButton
      containerStyle={{ margin: '64px 0' }}
    />
  );
};

export default NotFoundError;
