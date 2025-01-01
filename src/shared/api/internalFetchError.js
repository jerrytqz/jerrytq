/*
  For all errors that are caught in the explicit try...catch of the request 
  (i.e. not arising from an expected error defined in the backend API), wrap
  them with this class to distinguish them from any other types of errors.
*/

class InternalFetchError extends Error {
  constructor(wrappedErrorName, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InternalFetchError);
    }

    this.name = this.constructor.name;
    this.wrappedErrorName = wrappedErrorName;
  }
}

export default InternalFetchError;
