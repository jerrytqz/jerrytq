export let API_BASE_URL: URL = new URL(
  'jerrytq/',
  'https://fortress.jerrytq.com',
);

if (process.env.NODE_ENV === 'development') {
  API_BASE_URL = new URL('jerrytq/', 'http://192.168.68.132:8000');
}

export const ASSETS_BASE_URL: URL = new URL(
  'jerrytq/',
  'https://starship.jerrytq.com',
);
