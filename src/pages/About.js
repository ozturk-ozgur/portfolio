import React, { useContext, useEffect } from "react";
import bootstrap from "../assets/bootstrap.png";
import css from "../assets/css.png";
import express from "../assets/express.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import mongo from "../assets/mongo.jpeg";
import node from "../assets/node.png";
import react from "../assets/react.png";
import sass from "../assets/sass.webp";
import MenuContext from "../context/MenuContext";

function About() {
  const { setIsShowMenu, darkMode } = useContext(MenuContext);
  useEffect(() => {
    setIsShowMenu(false);
  }, [setIsShowMenu]);
  // console.log(crypto.randomUUID());
  console.log("about");

  const code = "<coder>";

  return (
    <div id={darkMode ? "about-dark" : "about"}>
      <section id="about-a" className="text-center">
        <div className="">
          <h2 className="section-title">About Me </h2>
          <div className="border-bottom-secondary"></div>

          <p className="lead">
            <span className="code">{darkMode && code}</span>
            <span className="code-text">
              Frontend Developer who writes clean,elegant and efficient code.{" "}
            </span>
          </p>
        </div>
      </section>

      <section id="about-b" className="bg-dark py-1">
        <div className="container">
          <h2 className="section-title text-center">What I Know... </h2>
          <div className="border-bottom"></div>
          <div id="progress-bars">
            <h4>Html</h4>
            <div className="progress">
              <div style={{ width: "90%" }}></div>
            </div>

            <h4>Css</h4>
            <div className="progress">
              <div style={{ width: "85%" }}></div>
            </div>

            <h4>Javascript</h4>
            <div className="progress">
              <div style={{ width: "85%" }}></div>
            </div>

            <h4>React</h4>
            <div className="progress">
              <div style={{ width: "80%" }}></div>
            </div>

            <h4>NodeJs</h4>
            <div className="progress">
              <div style={{ width: "75%" }}></div>
            </div>

            <h4>Express</h4>
            <div className="progress">
              <div style={{ width: "90%" }}></div>
            </div>

            <h4>MongoDb</h4>
            <div className="progress">
              <div style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-c" className=" py-1 my-2">
        <div className="container">
          <div className="about-logos">
            <img src={github} alt="github" />
            <img src={bootstrap} alt="bootstrap" />
            <img src={sass} alt="sass" />
            <img src={react} alt="react" />
            <img src={express} alt="express" />
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={js} alt="js" />
            <img src={node} alt="node" />
            <img src={mongo} alt="mongo" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
