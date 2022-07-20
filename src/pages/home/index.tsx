import { FC } from "react";
import image from "./assets/img/profile_picture.jpg";
import classes from "./home.module.scss";

const Home: FC = () => {
  return (
    <div className={classes.container}>
      {/* TODO: Implement srcset for responsive image */}
      <img
        className={classes.profile_picture}
        src={image}
        alt="Syed Nazmus Sakib"
        width={200}
        height={200}
      />
      <div>
        <p>Hi, I'm S. N. Sakib</p>
        <p>Description</p>
        <p>Description</p>
        <p>Description</p>
      </div>
    </div>
  );
};

export default Home;
