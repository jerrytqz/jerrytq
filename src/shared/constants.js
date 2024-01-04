export let BACKEND_BASE_DIR = 'https://fortress.jerrytq.com/jerrytq';
if (process.env.NODE_ENV === 'development') {
  BACKEND_BASE_DIR = 'http://127.0.0.1:8000/jerrytq';
}
export const ASSETS_BASE_DIR = 'https://starship.jerrytq.com/jerrytq';
