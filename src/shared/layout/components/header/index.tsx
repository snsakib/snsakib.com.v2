import { FC } from "react";
import { Link } from 'react-router-dom';

let Header: FC = () => {
  return(
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/experiences">Experiences</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/education">Education</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/services">Services</Link>
      </nav>
    </header>
  );
}

export default Header;