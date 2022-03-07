import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Projects from './index';

let ProjectsRoutes: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Projects/>}></Route>
    </Routes>
  )
}

export default ProjectsRoutes;