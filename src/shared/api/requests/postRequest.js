import { API_BASE_URL } from '../../urlBases';
import InternalFetchError from '../utility/internalFetchError';
import verifyIsJson from '../utility/verifyIsJson';

const postRequest = async ({ endpoint, data = new FormData() }) => {
  const url = new URL(endpoint, API_BASE_URL);
  let response;

  try {
    response = await fetch(url, {
      method: 'POST',
      body: data,
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

export default postRequest;
