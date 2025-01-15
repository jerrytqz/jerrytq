const API_BASE_URL = new URL(
  'jerrytq/',
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_URL_DEVELOPMENT
    : process.env.REACT_APP_API_URL_PRODUCTION,
);

export default API_BASE_URL;
