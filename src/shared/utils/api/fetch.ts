import axios from 'axios';

import merge from 'lodash/fp/merge';

function fetch(params: any, headers = {}) {
  const instance = axios.create();
  // Create a new CancelToken source for this request
  const source = axios.CancelToken.source();

  const promise = instance({
    timeout: 20000,
    ...params,
    headers: merge(headers, params.headers),
    cancelToken: source.token,
  });

  return promise;
}

export default fetch;
