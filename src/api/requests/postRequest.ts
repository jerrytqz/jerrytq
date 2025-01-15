import API_BASE_URL from '../base';
import { IApiError } from '../interfaces';
import InternalFetchError from '../utility/internalFetchError';
import verifyIsJson from '../utility/verifyIsJson';

const postRequest = async <TApiResult>({
  endpoint,
  data = new FormData(),
}: {
  endpoint: string;
  data?: FormData;
}): Promise<TApiResult> => {
  const url = new URL(endpoint, API_BASE_URL);
  let response: Response;

  try {
    response = await fetch(url, {
      method: 'POST',
      body: data,
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

export default postRequest;
