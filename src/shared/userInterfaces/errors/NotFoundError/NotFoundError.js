import React from 'react';

import Error from '../Error/Error';

const NotFoundError = (props) => {
  return (
    <Error
      title="404"
      description="The page you requested could not be found!"
      homeButton
      containerStyle={props.containerStyle}
    />
  );
};

export default NotFoundError;
