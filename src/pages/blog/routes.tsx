import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from './index';

let BlogRoutes: FC = () => {
  return(
    <Routes>
      <Route path='/' element={<Blog/>}></Route>
    </Routes>
  );
}

export default BlogRoutes;