import axios from './index';
import { useQuery } from '@sveltestack/svelte-query';

const getVotes = async () => {
  const { data } = await axios.get('/api/v1/votes');
  return data;
};

export const useGetVotes = () => useQuery('votes', getVotes);
