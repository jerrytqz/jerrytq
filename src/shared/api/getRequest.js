import { API_BASE_URL } from '../urlBases';
import InternalFetchError from './internalFetchError';
import verifyIsJson from './verifyIsJson';

const getRequest = async (endpoint, params = {}) => {
  const url = new URL(endpoint, API_BASE_URL);
  let response;

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key]),
  );

  try {
    response = await fetch(url, {
      method: 'GET',
    });
  } catch (error) {
    throw new InternalFetchError(error.name, error.message);
  }

  await verifyIsJson(response);

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error);
  }

  return result;
};

export default getRequest;
