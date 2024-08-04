import React from 'react'
import './styles.css'
import './mediaqueries.css'
import aboutPic from "../assets/about-pic.webp";
import experienceIcon from "../assets/experience.png";
import educationIcon from "../assets/education.png";
import arrowIcon from "../assets/arrow.png";

const About = () => {
    const navigateTo = (url) => {
        window.location.href = url;
      };
  return (
    <>
        <section id="about" style={{ paddingBottom: "150px" }}>
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={aboutPic} alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experienceIcon} alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <p>1+ years <br />Frontend Development</p>
            </div>
            <div className="details-container">
              <img src={educationIcon} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>BCA<br />Bachelors Degree</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I am a web Developer by profession with a passion for creating attractive and interactive websites meeting customer needs and exceeding expectations. I worked on technologies like React.js and Next.js to develop websites from scratch and improve the existing website. Now I am working on my backend development skills, I am a Detail-oriented, organized, and meticulous employee. I will Works at a fast pace to meet tight deadlines. I am an Enthusiastic team player who is ready to contribute to company's success.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => navigateTo("#experience")}
      />
    </section>
    </>
  )
}

export default About

