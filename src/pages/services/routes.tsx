import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Services from './index';

let ServicesRoutes: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Services/>}></Route>
    </Routes>
  )
}

export default ServicesRoutes;