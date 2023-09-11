import {useMutation} from '@tanstack/react-query';
import useFetch from '../../shared/utils/api/useFetch';

const useMutatePostChat = () => {
  const fetch = useFetch((data: string) => ({
    method: 'POST',
    url: '/chat',
    data: {
      message: data,
    },
  }));

  return useMutation(data => fetch(data));
};

export default useMutatePostChat;
