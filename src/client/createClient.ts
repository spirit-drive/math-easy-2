import { Client } from './types';
import { connection } from './connection';

export const join = (...urls: string[]): string => urls.filter(Boolean).join('/');

export const createClient = (url: string): Client => ({
  query: (_url, params) => connection(join(url, _url), params),
  mutation: (_url, params) => connection(join(url, _url), params),
});
