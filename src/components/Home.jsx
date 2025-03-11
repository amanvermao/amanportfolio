import React from 'react'
import './styles.css'
import './mediaqueries.css'
import amanImg from "../assets/aman_img.webp";
import resume from "../assets/resume-example.pdf";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";

const Home = () => {
    const openResume = () => {
        window.open(resume);
      };
      
    
      const navigateTo = (url) => {
        window.location.href = url;
      };
  return (
    <section id="profile">
    <div className="section__pic-container">
      <img src={amanImg} alt="Aman Verma profile picture" style={{ borderRadius: "50%" }} />
    </div>
    <div className="section__text">
      <p className="section__text__p1">Hello, I'm</p>
      <h1 className="title">Aman Verma</h1>
      <p className="section__text__p2">Web Developer</p>
      <div className="btn-container">
        <button className="btn btn-color-2" onClick={openResume}>
          Download CV
        </button>
        <button className="btn btn-color-1" onClick={() => navigateTo("#contact")}>
          Contact Info
        </button>
      </div>
      <div id="socials-container">
        <img
          src={linkedinIcon}
          alt="My LinkedIn profile"
          className="icon"
          onClick={() => navigateTo("https://www.linkedin.com/in/aman-verma-243530220/")}
        />
        <img
          src={githubIcon}
          alt="My Github profile"
          className="icon"
          onClick={() => navigateTo("https://github.com/amanvermao")}
        />
      </div>
    </div>
  </section>
  )
}

export default Home
