import { API_BASE_URL } from '../urlBases';
import InternalFetchError from './internalFetchError';
import { ApiError } from './types';
import verifyIsJson from './verifyIsJson';

const getRequest = async <ApiResult>(
  endpoint: string,
  params: Record<string, string> = {},
): Promise<ApiResult> => {
  const url = new URL(endpoint, API_BASE_URL);
  let response: Response;

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key]),
  );

  try {
    response = await fetch(url, {
      method: 'GET',
    });
  } catch (error) {
    const e = error as Error;
    throw new InternalFetchError(e.name, e.message);
  }

  await verifyIsJson(response);

  const result: ApiResult | ApiError = await response.json();

  if (!response.ok) {
    const res = result as ApiError;
    throw new Error(res.error);
  }

  return result as ApiResult;
};

export default getRequest;
