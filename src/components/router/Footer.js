import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/_footer.scss";

function Footer() {
  return (
    <footer id="Footer">
      <NavLink to="/">Impressum</NavLink>
      <div>Copyright © 2023. All Rights Reserved</div>
    </footer>
  );
}

export default Footer;
