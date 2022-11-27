import { writable, get } from 'svelte/store';

const token = writable({});

export const getToken = (value: string) => get(token)[value];

export const setToken = (key: string, value: string) => token.set({ ...get(token), [key]: value });
