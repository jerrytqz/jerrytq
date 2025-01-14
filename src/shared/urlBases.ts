export const API_BASE_URL = new URL(
  'jerrytq/',
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_URL_DEVELOPMENT
    : process.env.REACT_APP_API_URL_PRODUCTION,
);

export const ASSETS_BASE_URL = new URL(
  'jerrytq/',
  process.env.REACT_APP_ASSETS_URL,
);
