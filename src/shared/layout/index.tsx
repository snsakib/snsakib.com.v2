import { FC } from "react";
import './layout.scss';
import Header from './components/header';
import Footer from './components/footer';

let Layout: FC = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
