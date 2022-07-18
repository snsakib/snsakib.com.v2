import { FC } from "react";
import image from './assets/img/profile_picture.jpg';
import classes from './home.module.scss';

const Home: FC = () => {
  return (
    <>
      <img className={classes.profile_picture} src={image} alt="Syed Nazmus Sakib" width={300} height={300}/>
      <p>
        Description
      </p>
    </>
  );
};

export default Home;