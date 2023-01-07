import Home from './Home';
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Work from "./Work";
import NotFound from './NotFound';

const routes = [
  { id: "1", path: "/", element: <Home/> },
  { id: "2", path: "/about", element: <About/> },
  { id: "4", path: "/skills", element: <Skills/> },
  { id: "5", path: "/work", element: <Work/> },
  { id: "3", path: "/contact", element: <Contact/> },
  { id: "6", path: "/*", element: <NotFound/> },
];

export { routes };

