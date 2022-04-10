import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { Home } from '../screens/Home';

export const Navigation: FC = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
