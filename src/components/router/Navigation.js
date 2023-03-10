import React, { useContext } from "react";
import { FiMoon, FiX } from "react-icons/fi";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { VscCode } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import MenuContext from "../../context/MenuContext";

function Navigation() {
  const navLinks = [
    { to: "/", name: "Home", index: 1 },
    { to: "/about", name: "About", index: 2 },
    // { to: "/skills", name: "Skills", index: 4 },
    { to: "/work", name: "Work", index: 5 },
    { to: "/contact", name: "Contact", index: 3 },
  ];

  const { isShowMenu, setIsShowMenu, darkMode, setDarkMode } =
    useContext(MenuContext);

  const changeColorMode = () => {
    setDarkMode(!darkMode);
  };

  const handleMenuIcon = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <nav id={darkMode ? "NavigationDark" : "Navigation"}>
      <section className="navIcons">
        <div className="icons">
          <NavLink to="/">
            <VscCode className="logo" />
          </NavLink>

          {!isShowMenu && (
            <a
              className="github"
              href="https://www.linkedin.com/in/özgür-öztürk-webDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              özgür / <GrLinkedin />
            </a>
          )}
        </div>
        <div className="icons">
          <FiMoon
            onClick={changeColorMode}
            className={darkMode ? "darkMode" : "lightMode"}
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
          <div className="parentListItems">
            {navLinks.map((link) => (
              <li key={link.index} className="listItems">
                <NavLink className="navLinks" to={link.to}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/özgür-öztürk-webDev"
              rel="noopener noreferrer"
            >
              <GrLinkedin className="contact-icons" />
            </a>
            <a
              target="_blank"
              href="https://github.com/ozturk-ozgur"
              rel="noopener noreferrer"
            >
              <GoMarkGithub className="contact-icons" />
            </a>
            <a
              href="mailto:oeztuerk.oezguer@icloud.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdMail className="contact-icons" />
            </a>

            <a
              href="https://wa.me/4915254364406"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IoLogoWhatsapp className="contact-icons" />
            </a>
          </div>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
