import {useCallback} from 'react';
import fetch from './fetch';

const waitForInteraction = () => {
  return new Promise(resolve => {
    requestAnimationFrame(() => resolve());
  });
};

export default function useFetch(fetchFn) {
  const handleFetch = useCallback(
    async args => {
      function polyfillFetchConfig(baseConfig) {
        return {
          baseURL: 'https://private-dd3af-khoerulrizal.apiary-mock.com/',
          ...baseConfig,
        };
      }

      const _fetchConfig = await fetchFn(args);
      const fetchConfig = polyfillFetchConfig(_fetchConfig);
      await waitForInteraction();
      return fetch(fetchConfig).catch(err => {
        throw err;
      });
    },
    [fetchFn],
  );
  return handleFetch;
}
