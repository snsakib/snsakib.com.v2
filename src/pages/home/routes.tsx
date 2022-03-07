import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './index';

let HomeRoutes: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
  )
}

export default HomeRoutes;