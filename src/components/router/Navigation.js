import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { VscCode } from "react-icons/vsc";
import { GoMarkGithub } from "react-icons/go";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import infiniteImg from "../../assets/infinite-loader.gif"


function Navigation() {
  const navLinks = [
    { to: "/", name: "Home", index: 1 },
    { to: "/about", name: "About", index: 2 },
    { to: "/skills", name: "Skills", index: 4 },
    { to: "/work", name: "Work", index: 5 },
    { to: "/contact", name: "Contact", index: 3 },
  ];

  const [isShowMenu, setIsShowMenu] = useState(false);
  const handleMenuIcon = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <nav id="Navigation">
      <section className="navIcons">
        <div className="icons">
          <VscCode className="logo" />
          {isShowMenu && (
            <span className="github">
              özgür /<GoMarkGithub />
            </span>
          )}
        </div>
        <div className="icons">
          <FiMoon
            className={!isShowMenu ? "darkMode" : "darkMode dark-animate"}
          />
          {!isShowMenu ? (
            <MdMenu className="iconShowMenu" onClick={handleMenuIcon} />
          ) : (
            <FiX className="iconCloseMenu" onClick={handleMenuIcon} />
          )}
        </div>
      </section>

      {isShowMenu && (
        <ul className="list my-3">
          <div>
            {navLinks.map((link) => (
              <li key={link.index} className="listItems">
                <NavLink className="navLinks" to={link.to}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </div>
          <div>
            <GoMarkGithub className="contact-icons" />
            <IoMdMail className="contact-icons" />
            <IoLogoWhatsapp className="contact-icons" />
          </div>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
