import axios from './index';
import { useQuery } from '@sveltestack/svelte-query';

const getVotes = async () => {
  const { data } = await axios.get('/api/v1/votes');
  return data;
};

const getHistoryVotes = async () => {
  const { data } = await axios.get('/api/v1/votes/history');
  return data;
};

export const useGetVotes = () => useQuery('votes', getVotes);

export const useGetHistoryVotes = () => useQuery('history', getHistoryVotes);
