import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Education from './index';

let EducationRoutes: FC = () => {
  return(
    <Routes>
      <Route path='/' element={<Education/>}></Route>
    </Routes>
  );
}

export default EducationRoutes;