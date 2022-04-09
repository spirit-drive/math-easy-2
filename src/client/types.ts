export type QueryParams = RequestInit;
export type MutationParams = RequestInit;

export type ClientResponse<T> = {
  data: T;
  error: Error;
};

export interface Client {
  query: <T>(url: string, params: QueryParams) => Promise<ClientResponse<T>>;
  mutation: <T>(url: string, params: MutationParams) => Promise<ClientResponse<T>>;
}
