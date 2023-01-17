// import Home from './Home';
import { lazy } from "react";
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Skills = lazy(() => import("./Skills"));
const Work = lazy(() => import("./Work"));
const NotFound = lazy(() => import("./NotFound"));
const Impressum = lazy(() => import("./Impressum"));


const routes = [
  { id: "1", path: "/", element: <Home /> },
  { id: "2", path: "/about", element: <About /> },
  { id: "3", path: "/skills", element: <Skills /> },
  { id: "4", path: "/work", element: <Work /> },
  { id: "5", path: "/contact", element: <Contact /> },
  { id: "6", path: "/*", element: <NotFound /> },
  { id: "7", path: "/impressum", element: <Impressum /> }

];

export { routes };
