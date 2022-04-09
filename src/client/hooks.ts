import { useCallback, useState } from 'react';
import { ClientResponse, QueryParams } from './types';
import { useClient } from './ClientProvider';

export type GetQuery<T> = (url?: string, params?: QueryParams) => Promise<ClientResponse<T>>;
export type QueryResponse<T> = { error: Error | null; loading: boolean; data: T | null };
export type QueryTuple<T> = [GetQuery<T>, QueryResponse<T>];

export const useQuery = <T>(url: string, params?: QueryParams): QueryTuple<T> => {
  const client = useClient();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  const get = useCallback<GetQuery<T>>(
    ($url, $params) => {
      setError(null);
      setLoading(true);
      return new Promise((resolve, reject) => {
        client
          .query<T>($url || url, $params || params)
          .then((res) => {
            if ('error' in res && res.error) {
              setData(null);
              reject(res.error);
              setError(res.error);
            } else {
              resolve(res);
              setData(res.data);
            }
          })
          .catch((e) => {
            reject(e);
            setError(e);
            setData(null);
          })
          .finally(() => setLoading(false));
      });
    },
    [client, params, url]
  );

  return [get, { error, loading, data }];
};
