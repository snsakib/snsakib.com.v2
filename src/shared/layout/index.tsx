import { FC } from "react";
import './layout.scss';

let Layout: FC = ({ children }) => {
  return (
    <>
      <div>Header</div>
      { children }
      <div>Footer</div>
    </>
  );
};

export default Layout;
