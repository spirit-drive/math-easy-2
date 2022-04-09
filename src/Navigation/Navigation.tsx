import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../screens/Home';

export const Navigation: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  </BrowserRouter>
);
