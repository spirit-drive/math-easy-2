import { ClientResponse } from './types';
import { Queries } from './queries';
import { practices } from './mock';
import { join } from './createClient';
import { URL } from './client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const connection = <T>(url: string, init?: RequestInit): Promise<ClientResponse<T>> => {
  if (url === join(URL, Queries.practices)) {
    return Promise.resolve<ClientResponse<T>>({ error: null, data: practices as unknown as T });
  }
  return Promise.resolve<ClientResponse<T>>({ error: null, data: null });
};

// export const connection = <T>(url: string, init?: RequestInit): Promise<ClientResponse<T>> =>
//   fetch(url, init)
//     .then((res) => res.json())
//     .then((res) => res as ClientResponse<T>);
