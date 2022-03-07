import { FC } from "react";
import './layout.scss';
import Header from './components/header';

let Layout: FC = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <div>Footer</div>
    </>
  );
};

export default Layout;
