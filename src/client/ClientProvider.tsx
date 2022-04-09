import React, { createContext, FC, useContext } from 'react';
import { Client } from './types';

export type ClientProviderType = Client;

export const ClientContext = createContext<ClientProviderType>({} as ClientProviderType);

export type ClientProviderProps = {
  client: Client;
  children: React.ReactElement | React.ReactElement[];
};

export const useClient = (): ClientProviderType => useContext(ClientContext);

export const ClientProvider: FC<ClientProviderProps> = ({ client, children }) => (
  <ClientContext.Provider value={client}>{children}</ClientContext.Provider>
);
