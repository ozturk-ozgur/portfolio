import React, { useContext, useEffect } from "react";
import MenuContext from "../context/MenuContext";
import work1 from "../assets/projects-images/work-1.png";
import work2 from "../assets/projects-images/work-2.png";
import work3 from "../assets/projects-images/work-3.png";
import work4 from "../assets/projects-images/work-4.png";
import work5 from "../assets/projects-images/work-5.png";
import work6 from "../assets/projects-images/work-6.png";
import work7 from "../assets/projects-images/work-7.png";
import work8 from "../assets/projects-images/work-8.png";
import work9 from "../assets/projects-images/work-9.png";
import work10 from "../assets/projects-images/work-10.png";
import work11 from "../assets/projects-images/work-11.png";
import work12 from "../assets/projects-images/work-12.png";
import work13 from "../assets/projects-images/work-13.png";
import work14 from "../assets/projects-images/work-14.png";
import work15 from "../assets/projects-images/work-15.png";
import work16 from "../assets/projects-images/work-16.png";
import work17 from "../assets/projects-images/work-17.png";
import work18 from "../assets/projects-images/work-18.png";

function Work() {
  const { isShowMenu, setIsShowMenu } = useContext(MenuContext);
  useEffect(() => {
    setIsShowMenu(false);
  }, [setIsShowMenu]);
  return (
    <div>
      <section id="projects" className="text-center py-2 my-2">
        <div className="container text-center">
          <h2 className="section-title">My Projects</h2>
          <div className="border-bottom-secondary"></div>
          <div className="lead">You can see my projects here</div>

          <div className="items">
            <div className="item">
              <div className="item__image">
                <a href={work1}>
                  <img src={work1} alt="" />
                </a>
              </div>
            </div>

            <div className="item">
              <div className="item__image">
                <a href={work2}>
                  <img src={work2} alt="" />
                </a>
              </div>
            </div>

            <div className="item">
              <div className="item__image">
                <a href={work3}>
                  <img src={work3} alt="" />
                </a>
              </div>
            </div>

            <div className="item">
              <div className="item__image">
                <a href={work4}>
                  <img src={work4} alt="" />
                </a>
              </div>
            </div>

            <div className="item">
              <div className="item__image">
                <a href={work5}>
                  <img src={work5} alt="" />
                </a>
              </div>
            </div>

            <div className="item">
              <div className="item__image">
                <a href={work6}>
                  <img src={work6} alt="" />
                </a>
              </div>
            </div>

            <div className="item">
              <div className="item__image">
                <a href={work7}>
                  <img src={work7} alt="" />
                </a>
              </div>
            </div>

            <div className="item">
              <div className="item__image">
                <a href={work8}>
                  <img src={work8} alt="" />
                </a>
              </div>
            </div>

            <div className="item">
              <div className="item__image">
                <a href={work9}>
                  <img src={work9} alt="" />
                </a>
              </div>
            </div>

            <div className="item">
              <div className="item__image">
                <a href={work10}>
                  <img src={work10} alt="" />
                </a>
              </div>
            </div>

            <div className="item">
              <div className="item__image">
                <a href={work11}>
                  <img src={work11} alt="" />
                </a>
              </div>
            </div>

            <div className="item">
              <div className="item__image">
                <a href={work12}>
                  <img src={work12} alt="" />
                </a>
              </div>
            </div>

            <div className="item">
              <div className="item__image">
                <a href={work13}>
                  <img src={work13} alt="" />
                </a>
              </div>
            </div>

            <div className="item">
              <div className="item__image">
                <a href={work14}>
                  <img src={work14} alt="" />
                </a>
              </div>
            </div>

            <div className="item">
              <div className="item__image">
                <a href={work15}>
                  <img src={work15} alt="" />
                </a>
              </div>
            </div>

            <div className="item">
              <div className="item__image">
                <a href={work16}>
                  <img src={work16} alt="" />
                </a>
              </div>
            </div>

            <div className="item">
              <div className="item__image">
                <a href={work17}>
                  <img src={work17} alt="" />
                </a>
              </div>
            </div>

            <div className="item">
              <div className="item__image">
                <a href={work18}>
                  <img src={work18} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
