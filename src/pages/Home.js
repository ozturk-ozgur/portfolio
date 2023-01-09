import React, { useEffect, useState, useContext } from "react";
import MenuContext from "../context/MenuContext";
import {BsFillSuitHeartFill} from "react-icons/bs"


function Home() {
  const { isShowMenu, setIsShowMenu } = useContext(MenuContext);
  useEffect(() => {
    setIsShowMenu(true);
  }, [setIsShowMenu]);
  return (
    <div id="Home" className="text-center">
     <h1 className="heading">Hi there!  Nice to meet you!</h1>
     <h className="text">Frontend Developer, I build things for the web and code beautifully simple things.</h>
     <p className="text">I love <BsFillSuitHeartFill className="heart-icon"/> what I do!</p>
    
    </div>
  );
}

export default Home;