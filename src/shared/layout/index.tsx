import { FC } from "react";
import Header from './components/header';
import Footer from './components/footer';

import Styles from './index.module.scss';

let Layout: FC = ({children}) => {
  return (
    <>
      <Header/>
        <main className={Styles.main}>
          {children}
        </main>
      <Footer/>
    </>
  );
};

export default Layout;
