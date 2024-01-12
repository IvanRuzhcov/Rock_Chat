import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from '../MainPage/MainPage';
import RegiserPage from '../RegiserPage/RegiserPage';
import { useAppDispatch } from '../../store';
import { registerUser } from '../RegiserPage/regiserSlace';

function App() {
  const dispatch = useAppDispatch();

  // useEffect(()=> {
  //   dispatch()
  // },[dispatch])

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegiserPage />} />
      </Routes>
    </>
  );
}

export default App;
