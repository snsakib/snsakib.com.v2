import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Skills from './index';

let SkillsRoutes: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Skills/>}></Route>
    </Routes>
  )
}

export default SkillsRoutes;