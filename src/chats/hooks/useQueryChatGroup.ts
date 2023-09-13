import {useCallback} from 'react';
import useFetch from '../../shared/utils/api/useFetch';
import {useQuery} from '@tanstack/react-query';

const useQueryChatGroup = () => {
  const _fetch = useCallback(() => {
    return {
      method: 'GET',
      url: '/chat/group',
    };
  }, []);
  const fetch = useFetch(_fetch);

  return useQuery(['group_chat'], fetch, {cacheTime: 0});
};

export default useQueryChatGroup;
