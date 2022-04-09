import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Navigation: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<div>Home</div>} />
    </Routes>
  </BrowserRouter>
);
