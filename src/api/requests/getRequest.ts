import API_BASE_URL from '../base';
import { IApiError } from '../interfaces';
import InternalFetchError from '../utility/internalFetchError';
import verifyIsJson from '../utility/verifyIsJson';

const getRequest = async <TApiResult>(
  endpoint: string,
  params: Record<string, string> = {},
): Promise<TApiResult> => {
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

  const result: TApiResult | IApiError = await response.json();

  if (!response.ok) {
    const res = result as IApiError;
    throw new Error(res.error);
  }

  return result as TApiResult;
};

export default getRequest;
