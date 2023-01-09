import React, { useContext, useEffect } from "react";
import MenuContext from "../context/MenuContext";
import wix from "../assets/wix.png";
import joomla from "../assets/joomla.png";
import wordpress from "../assets/wordpress.png";
import woocommerce from "../assets/woocommerce.png";
import aboutImg from "../assets/about-image.jpg";




function About() {
  const { isShowMenu, setIsShowMenu } = useContext(MenuContext);
  useEffect(() => {
    setIsShowMenu(false);
  }, [setIsShowMenu]);
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
  const code = "<coder>"

  return (
    <div id="about">
      <section id="about-a" class="text-center">
        <div className="container">
          <h2 className="section-title">About Me </h2>
          <div className="border-bottom"></div>
          <p className="lead">
            <span className="code">{code}</span> 
            <span className="code-text">Frontend Developer who writes clean,elegant and efficient code. </span>
          </p>  
        </div>
      </section>

      <section id="about-b" className="bg-dark py-1">
        <div className="container">
          <h2 className="section-title text-center">What I Know... </h2>
          <div className="border-bottom"></div>
          <div id="progress-bars">
            <h4>Css</h4>
            <div className="progress">
              <div style={{ width: "75%" }}></div>
            </div>

            <h4>Javascript</h4>
            <div className="progress">
              <div style={{ width: "85%" }}></div>
            </div>

            <h4>React</h4>
            <div className="progress">
              <div style={{ width: "80%" }}></div>
            </div>

            <h4>MongoDb</h4>
            <div className="progress">
              <div style={{ width: "30%" }}></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-c" className="bg-light py-2">
        <div className="container">
          <div className="about-logos">
            <img src={joomla} alt="" />
            <img src={woocommerce} alt="" />
            <img src={wordpress} alt="" />
            <img src={wix} alt="" />
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default About;
