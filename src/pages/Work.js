import React, { useContext, useEffect } from "react";
import MenuContext from "../context/MenuContext";

function Work() {
  const { isShowMenu, setIsShowMenu } = useContext(MenuContext);
  useEffect(() => {
    setIsShowMenu(false);
  }, [setIsShowMenu]);
  return <div>Work</div>;
}

export default Work;
