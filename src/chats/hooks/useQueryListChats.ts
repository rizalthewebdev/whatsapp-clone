import {useQuery} from '@tanstack/react-query';
import useFetch from '../../shared/utils/api/useFetch';
import {useCallback} from 'react';

const useQueryListChats = () => {
  const _fetch = useCallback(() => {
    return {
      method: 'GET',
      url: '/chats',
    };
  }, []);
  const fetch = useFetch(_fetch);

  return useQuery(['list-chats'], fetch);
};

export default useQueryListChats;
