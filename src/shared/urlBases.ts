export const API_BASE_URL = new URL(
  'jerrytq/',
  process.env.NODE_ENV === 'development'
    ? 'http://192.168.68.132:8000'
    : 'https://fortress.jerrytq.com',
);

export const ASSETS_BASE_URL = new URL(
  'jerrytq/',
  'https://starship.jerrytq.com',
);
