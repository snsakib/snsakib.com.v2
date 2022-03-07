import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Experiences from './index';

let ExperiencesRoutes: FC = () => {
  return(
    <Routes>
      <Route path='/' element={<Experiences/>}></Route>
    </Routes>
  );
}

export default ExperiencesRoutes;