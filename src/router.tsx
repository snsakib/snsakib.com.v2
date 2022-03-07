import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import HomeRoutes from "./pages/home/routes";
import ProjectsRoutes from "./pages/projects/routes";
import BlogRoutes from "./pages/blog/routes";
import ExperiencesRoutes from "./pages/experiences/routes";
import ServicesRoutes from "./pages/services/routes";
import SkillsRoutes from "./pages/skills/routes";
import EducationRoutes from "./pages/education/routes";
import AboutRoutes from "./pages/about/routes";
import ContactRoutes from "./pages/contact/routes";

let Router: FC = () => {
  return (
    <Routes>
      <Route path='/home' element={<HomeRoutes/>}></Route>
      <Route path='/projects' element={<ProjectsRoutes/>}></Route>
      <Route path='/blog' element={<BlogRoutes/>}></Route>
      <Route path='/experiences' element={<ExperiencesRoutes/>}></Route>
      <Route path='/services' element={<ServicesRoutes/>}></Route>
      <Route path='/skills' element={<SkillsRoutes/>}></Route>
      <Route path='/education' element={<EducationRoutes/>}></Route>
      <Route path='/about' element={<AboutRoutes/>}></Route>
      <Route path='/contact' element={<ContactRoutes/>}></Route>
      <Route path='/' element={<HomeRoutes/>}></Route>
    </Routes>
  );
}

export default Router;