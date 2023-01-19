import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Main />} />
        <Route path='/signin' element={<Login />} />
=======
        <Route path='/login' element={<Login />} />
        <Route path='/main' element={<Main />} />
>>>>>>> 01d1716 (Modify: login, main router 경로 수정)
      </Routes>
    </BrowserRouter>
  );
}
