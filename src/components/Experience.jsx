import React from 'react'
import './mediaqueries.css'
import './styles.css'
import checkmarkIcon from "../assets/checkmark.png";
import arrowIcon from "../assets/arrow.png";

const Experience = () => {

    const navigateTo = (url) => {
        window.location.href = url;
      };

      const skills = {
        frontend: [
          { name: "HTML", level: "Experienced" },
          { name: "CSS", level: "Experienced" },
          { name: "JavaScript", level: "Intermediate" },
          { name: "React JS", level: "Intermediate" },
          { name: "Bootstrap", level: "Intermediate" },
          { name: "Material UI", level: "Intermediate" },
        ],
        backend: [
          { name: "Node JS", level: "Intermediate" },
          { name: "Express JS", level: "Intermediate" },
          { name: "Mongo DB", level: "Intermediate" },
          { name: "API", level: "Intermediate" },
        ],
      };
      
      const experienceData = [
        {
          title: "Freelance Front-end Developer",
          location: "Sitesocials",
          duration: "February 2024 - June 2024",
          details: [
            "Developed websites from scratch, ensuring a seamless user experience",
            "Transformed website designs into fully functional and interactive websites",
            "Enhanced and optimized website designs for improved aesthetics and usability.",
          ],
        },
        {
          title: "Front-end Developer Intern",
          location: "cyberxield.in In Partnership with cyberarch.eu",
          duration: "January 2024 - February 2024",
          details: [
            "Led a team by effectively distributing work among teammates.",
            "Worked remotely to meet weekly deadlines and project checkpoints.",
            "Designed and built a dynamic Services page and an animated services section for the home page.",
            "Developed a comprehensive Blogs page along with detailed blog posts for the website.",
          ],
        },
      ];
    
      const additionalExperienceData = [
        {
          title: "Content Writer",
          location: "www.inetfreak.com",
          duration: "September 2022 - November 2022",
          details: [
            "Wrote and edited high-quality content and visually impactful programs under deadline pressure with an exciting, captivating, and authentic approach.",
            "Crafted SEO-friendly content for websites to enhance search engine visibility.",
            "Created blog posts to increase organic traffic.",
          ],
        },
      ];

  return (
 <>
       <section id="experience">
    <p className="section__text__p1">Explore My</p>
    <h1 className="title">Skills</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container">
          <h2 className="experience-sub-title">Frontend Development</h2>
          <div className="article-container">
            {skills.frontend.map((skill, index) => (
              <article key={index}>
                <img src={checkmarkIcon} alt="Experience icon" className="icon" />
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.level}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="details-container">
          <h2 className="experience-sub-title">Backend Development</h2>
          <div className="article-container">
            {skills.backend.map((skill, index) => (
              <article key={index}>
                <img src={checkmarkIcon} alt="Experience icon" className="icon" />
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.level}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
    <img
      src={arrowIcon}
      alt="Arrow icon"
      className="icon arrow"
      onClick={() => navigateTo("#projects")}
    />
  </section>
  <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <main className="CV-page">
        <div className="CV-grid">
          <div className="CV-grid-column">
            <div className="CV-jobs">
              <h2 className="CV-secondaryHeading CV-jobs-heading">Relevant Experience</h2>
              {experienceData.map((job, index) => (
                <section className="CV-timeline CV-job" key={index}>
                  <h3 className="CV-timeline-heading">
                    <span className="CV-timeline-heading-title">{job.title} </span>
                    &#8211;
                    <span className="CV-timeline-heading-location"> {job.location}</span>
                    <small className="CV-timeline-heading-duration">{job.duration}</small>
                  </h3>
                  <ul className="CV-timeline-details">
                    {job.details.map((detail, index) => (
                      <li className="CV-job-timeline-item" key={index}>{detail}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
            <div className="CV-jobs">
              <h2 className="CV-secondaryHeading CV-jobs-heading">Additional Experience</h2>
              {additionalExperienceData.map((job, index) => (
                <section className="CV-timeline CV-job" key={index}>
                  <h3 className="CV-timeline-heading">
                    <span className="CV-timeline-heading-title">{job.title}</span>
                    &#8211;
                    <span className="CV-timeline-heading-location"> {job.location}</span>
                    <small className="CV-timeline-heading-duration">{job.duration}</small>
                  </h3>
                  <ul className="CV-timeline-details">
                    {job.details.map((detail, index) => (
                      <li className="CV-job-timeline-item" key={index}>{detail}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
    </section>
 </>
  
  )
}

export default Experience
