import React, { useContext, useEffect } from "react";
import MenuContext from "../context/MenuContext";


function About() {
  const { isShowMenu, setIsShowMenu } = useContext(MenuContext);
  useEffect(() => {
    setIsShowMenu(false);
  }, [setIsShowMenu]);

  return <div>About</div>;
}

export default About;
