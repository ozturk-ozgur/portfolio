import React, { useContext, useEffect } from "react";
import MenuContext from "../context/MenuContext";

function Skills() {
  const { isShowMenu, setIsShowMenu } = useContext(MenuContext);
  useEffect(() => {
    setIsShowMenu(false);
  }, [setIsShowMenu]);
  return <div>Skills</div>;
}

export default Skills;
