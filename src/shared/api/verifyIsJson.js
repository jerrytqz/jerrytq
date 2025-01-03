const verifyIsJson = async (response) => {
  const contentType = response.headers.get('Content-Type');

  if (contentType && contentType.includes('application/json')) {
    return;
  }

  if (contentType && contentType.includes('text/html')) {
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const title = doc.querySelector('title');

    throw new Error(
      title
        ? title.textContent
        : 'Response did not have Content-Type: application/json.',
    );
  }

  throw new Error('Response did not have a valid Content-Type.');
};

export default verifyIsJson;
