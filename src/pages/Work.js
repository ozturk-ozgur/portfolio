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
  const { setIsShowMenu } = useContext(MenuContext);
  useEffect(() => {
    setIsShowMenu(false);
  }, [setIsShowMenu]);

  let works = [
    work1,
    work2,
    work3,
    work4,
    work5,
    work6,
    work7,
    work8,
    work9,
    work10,
    work11,
    work12,
    work13,
    work14,
    work15,
    work16,
    work17,
    work18,
  ];

  return (
    
      <section id="Work" className="text-center py-2 my-2">
        <div className="container text-center">
          <h2 className="section-title">My Projects</h2>
          <div className="border-bottom-secondary"></div>
          <div className="lead">You can see my projects here</div>

          <div className="items">
            {works.map((work, item) => {
              return (
                <div className="item">
                  <div className="item__image">
                    <a key={item} href={work}>
                      <img src={work} alt={work} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
  
  );
}

export default Work;
