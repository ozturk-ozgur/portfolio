import React, { useContext, useEffect } from "react";
import MenuContext from "../context/MenuContext";

function Skills() {
  const { setIsShowMenu } = useContext(MenuContext);
  useEffect(() => {
    setIsShowMenu(false);
  }, [setIsShowMenu]);
  return <div className="Skills">Skills</div>;
}

export default Skills;
