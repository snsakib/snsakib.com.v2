import { FC } from "react";
import { ReactComponent as Logo } from './assets/img/snsakib-logo.svg';
import Styles from './index.module.scss';

let Header: FC = () => {
  return(
    <header className={Styles.header}>
      <Logo className={Styles.logo}/>
    </header>
  );
}

export default Header;