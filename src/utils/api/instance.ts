import axios from 'axios';

import { LOCALE_STORAGE_KEYS } from '../constants';

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  validateStatus: () => true //headers { true } как-то влияет на patch-запросы !
});

api.interceptors.request.use((config) => {
  if (config.headers) config.headers.authorization = `Bearer ${localStorage.getItem(LOCALE_STORAGE_KEYS.TOKEN)}`;
  return config;
});
