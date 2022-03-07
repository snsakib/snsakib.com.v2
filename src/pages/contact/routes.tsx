import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './index';

let ContactRoutes: FC = () => {
  return(
    <Routes>
      <Route path='/' element={<Contact/>}></Route>
    </Routes>
  );
}

export default ContactRoutes;