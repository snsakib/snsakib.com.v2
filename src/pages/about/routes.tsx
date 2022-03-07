import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './index';

let AboutRoutes: FC = () => {
  return(
    <Routes>
      <Route path='/' element={<About/>}></Route>
    </Routes>
  );
}

export default AboutRoutes;