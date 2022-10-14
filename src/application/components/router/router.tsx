import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/home/home';

export const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};
