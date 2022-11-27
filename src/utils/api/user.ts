import axios from './index';
import { push } from 'svelte-spa-router';
import { useMutation } from '@sveltestack/svelte-query';

const register = async (formData) => {
  const { data } = await axios.post('/api/v1/users/signup', formData);
  if (data?.status === 200) push('/#/Home');
  else alert('실패');
};

export const useRegisterMutation = () => useMutation(register);
