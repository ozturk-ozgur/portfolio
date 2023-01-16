import React, { useEffect, useContext } from "react";
import MenuContext from "../context/MenuContext";
import {BsFillSuitHeartFill} from "react-icons/bs"
import { NavLink } from "react-router-dom";


function Home() {
  const { isShowMenu, setIsShowMenu,darkMode } = useContext(MenuContext);
  useEffect(() => {
    setIsShowMenu(true);
  }, [setIsShowMenu]);
  return (
    <div id={darkMode ? "HomeDark" : "Home"} className="text-center">
     <h1 className="heading">Hi there!  Nice to meet you!</h1>
     <p className="text">Frontend Developer, I build things for the web and code beautifully simple things.</p>
     <p className="text">I love <BsFillSuitHeartFill className="heart-icon"/> what I do!</p>
     {!isShowMenu && <button className={darkMode ? "btn-primary my-1" : "btn-light my-1"}> 
     <NavLink to="/contact">Contact me</NavLink></button>}
     
    </div>
  );
}

export default Home;
