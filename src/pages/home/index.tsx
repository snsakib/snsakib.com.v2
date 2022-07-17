import { FC } from "react";
import image from './assets/img/profile_picture.jpg';

const Home: FC = () => {
  return (
    <>
      <img src={image} alt="Syed Nazmus Sakib" />
      <p>
        Description
      </p>
    </>
  );
};

export default Home;