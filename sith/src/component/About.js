import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import SubLayout from "./SubLayout";
import Swipe from "./Swipe";

function About() {

  useEffect(()=>{
    window.scrollTo({top:0, behavior:'smooth'})
  })
  return (
    <SubLayout>
      <div className="about">
        <div className="about_inner">
          <div className="about_intro">
            <div className="right">
              <div className="right_inner">
                <img src="\image\office_img1.jpg" alt="" srcset="" />
              </div>
            </div>

            <div className="bg_about_back_line"></div>
            <div className="bg_about_back"></div>
            <div className="bg_about_back shift_right"></div>

            <div className="left">
              <Fade top>
                <h3 className="title">Hi, we’re Space Innovation Tech Hub</h3>
                <div className="title_line"></div>
                <h4 className="sub_title">
                  Space Innovation Tech Hub is the new face of technology in
                  Africa. We are the future of tech
                </h4>
              </Fade>
              <Fade bottom>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                  eius earum molestias commodi corrupti
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                  eius earum molestias commodi corrupti
                </p>
              </Fade>

            </div>
          </div>
          <div className="about_staffs">
            <h3>Our Management</h3>
          <h1>Space Innovation Tech Hub Management</h1>
          <div className="about_staffs_inner">
              <div className="staff_img">
              <img src="\image\office_img1.jpg" alt="" srcset="" />
              </div>
              <div className="staff_info">
                <h4>Name: <span>Mr Wonder SuperMan</span></h4>
              <h4>Position: <span>C.E.O</span></h4>
				<p>
					I am a 25 year old Nigerian software developer with science and art background. I love to spend my free time creating python game for kids, playing and going on long walks with my Cat. I love coding, fantasy and romance literature and
					series. 
				</p>
                <Link to="about-user"><button>Read More</button></Link>
              </div>
          </div>
      </div>
        </div>
       
      </div>
      
    </SubLayout>
  );
}

export default About;
