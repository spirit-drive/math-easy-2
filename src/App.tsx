import React from 'react';
import { Navigation } from './Navigation';
import { ClientProvider, client } from './client';

function App() {
  return (
    <ClientProvider client={client}>
      <Navigation />
    </ClientProvider>
  );
}

export default App;
