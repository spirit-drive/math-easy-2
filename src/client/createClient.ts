import { Client } from './types';
import { connection } from './connection';

export const createClient = (url: string): Client => ({
  query: (_url, params) => connection([url, _url].join('/'), params),
  mutation: (_url, params) => connection([url, _url].join('/'), params),
});
