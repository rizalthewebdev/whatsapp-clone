import {useCallback} from 'react';
import useFetch from '../../shared/utils/api/useFetch';
import {useQuery} from '@tanstack/react-query';

const useQueryChatPersonal = () => {
  const _fetch = useCallback(() => {
    return {
      method: 'GET',
      url: '/chat/personal',
    };
  }, []);
  const fetch = useFetch(_fetch);

  return useQuery(['personal_chat'], fetch, {cacheTime: 0});
};

export default useQueryChatPersonal;
