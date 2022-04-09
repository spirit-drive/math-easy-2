import { ClientResponse } from './types';

export const connection = <T>(url: string, init?: RequestInit): Promise<ClientResponse<T>> =>
  fetch(url, init)
    .then((res) => res.json())
    .then((res) => res as ClientResponse<T>);
