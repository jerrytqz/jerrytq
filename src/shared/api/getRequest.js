import { API_BASE_URL } from '../urlBases';

const getRequest = async (endpoint, params = {}) => {
  const url = new URL(endpoint, API_BASE_URL);

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key]),
  );

  const response = await fetch(url, {
    method: 'GET',
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error);
  }

  return result;
};

export default getRequest;
