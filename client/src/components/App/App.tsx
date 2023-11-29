import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from '../MainPage/MainPage';
import RegiserPage from '../RegiserPage/RegiserPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/registr" element={<RegiserPage />} />
      </Routes>
    </>
  );
}

export default App;
