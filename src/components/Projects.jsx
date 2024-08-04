import React from 'react'
import mern from '../assets/mern.webp'
import skin from '../assets/skin2.webp'
import dento from '../assets/dento.webp'
import arrow from '../assets/arrow.png'
import passgen from '../assets/passgen.webp'
import todolist from '../assets/todolist.webp'
import addtocart from '../assets/addtocart.webp'
import article from '../assets/article.webp'
import crypto from '../assets/crypto.webp'
import gym from '../assets/gym.webp'




const Projects = () => {
  return (
    <div>
      <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
      <div className="about-containers">
      <div className="details-container color-container">
        <div className="article-container">
          <img
            src={mern}
            alt="Project 1"
            className="project-img"
          />
        </div>
        <h2 className="experience-sub-title project-title">MERN CRUD APP</h2>
        <div className="btn-container">
         <a href='https://github.com/amanvermao/crudmernapp' target='_blank'>
         <button className="btn btn-color-2 project-btn">
            Github
          </button>
         </a>
          <a href="https://crudmernapp-frontend.onrender.com/" target='_blank'>
          <button
            className="btn btn-color-2 project-btn"
          >
            Live Demo
          </button>
          </a>
        </div>
      </div>

      <div className="details-container color-container">
        <div className="article-container">
          <img
            src={skin}
            alt="Project 2"
            className="project-img"
          />
        </div>
        <h2 className="experience-sub-title project-title">The Skin Clinic</h2>
        <div className="btn-container">
         <a href="https://drujjvalajadhav.com/" target='_blank'>
         <button
            className="btn btn-color-2 project-btn"
          >
            Live Demo
          </button>
         </a>
        </div>
      </div>

      <div className="details-container color-container">
        <div className="article-container">
          <img
            src={dento}
            alt="Project 3"
            className="project-img"
          />
        </div>
        <h2 className="experience-sub-title project-title">Dent-o-Heal</h2>
        <div className="btn-container">
         <a href="https://drsukhman.in/" target='_blank'>
         <button
            className="btn btn-color-2 project-btn"
          >
            Live Demo
          </button>
         </a>
        </div>
      </div>
    </div>
    <div className="about-containers">
      <div className="details-container color-container">
        <div className="article-container">
          <img
            src={addtocart}
            alt="Project 1"
            className="project-img"
          />
        </div>
        <h2 className="experience-sub-title project-title">Add To Cart</h2>
        <div className="btn-container">
          <a href="https://github.com/amanvermao/Add_to_Cart_Project" target='_blank'>
          <button
            className="btn btn-color-2 project-btn"
            
          >
            Github
          </button>
          </a>
          <a href="https://addtocartreactproject.netlify.app/" target='_blank'>
          <button
            className="btn btn-color-2 project-btn"
          >
            Live Demo
          </button>
          </a>
        </div>
      </div>

      <div className="details-container color-container">
        <div className="article-container">
          <img
            src={passgen}
            alt="Project 2"
            className="project-img"
          />
        </div>
        <h2 className="experience-sub-title project-title">Password Generator</h2>
        <div className="btn-container">
          <a href="https://github.com/amanvermao/passward-generator" target='_blank'>
          <button
            className="btn btn-color-2 project-btn"
            onClick={() => window.location.href = 'https://github.com/amanvermao/passward-generator'}
          >
            Github
          </button>
          </a>
          <a href="https://passward-generator-three.vercel.app/" target='_blank'>
          <button
            className="btn btn-color-2 project-btn"
            
          >
            Live Demo
          </button>
          </a>
        </div>
      </div>

      <div className="details-container color-container">
        <div className="article-container">
          <img
            src={gym}
            alt="Project 3"
            className="project-img"
          />
        </div>
        <h2 className="experience-sub-title project-title">The Fit Club</h2>
        <div className="btn-container">
          <a href="https://github.com/amanvermao/fitClub_React_project" target='_blank'>
          <button
            className="btn btn-color-2 project-btn"
          >
            Github
          </button>
          </a>
          <a href="https://thefitclubproject.netlify.app/" target='_blank'>
          <button
            className="btn btn-color-2 project-btn"
          >
            Live Demo
          </button>
          </a>
        </div>
      </div>
    </div>
    <div className="about-containers">
      <div className="details-container color-container">
        <div className="article-container">
          <img
            src={todolist}
            alt="Project 1"
            className="project-img"
          />
        </div>
        <h2 className="experience-sub-title project-title">Todo List</h2>
        <div className="btn-container">
          <a href="https://github.com/amanvermao/Todo_App" target='_blank'>
          <button
            className="btn btn-color-2 project-btn"
          >
            Github
          </button>
          </a>
          <a href="https://todo-app-eta-seven-92.vercel.app/" target='_blank'>
          <button
            className="btn btn-color-2 project-btn"
          >
            Live Demo
          </button>
          </a>
        </div>
      </div>

      <div className="details-container color-container">
        <div className="article-container">
          <img
            src={crypto}
            alt="Project 2"
            className="project-img"
          />
        </div>
        <h2 className="experience-sub-title project-title">xcrypto</h2>
        <div className="btn-container">
          <a href="https://github.com/amanvermao/crypto_react_project" target='_blank'>
          <button
            className="btn btn-color-2 project-btn"
          >
            Github
          </button>
          </a>
          <a href="https://xcryptoproject.netlify.app/" target='_blank'>
          <button
            className="btn btn-color-2 project-btn"
          >
            Live Demo
          </button>
          </a>
        </div>
      </div>

      <div className="details-container color-container">
        <div className="article-container">
          <img
            src={article}
            alt="Project 3"
            className="project-img"
          />
        </div>
        <h2 className="experience-sub-title project-title">Article Posting Website UI/UX</h2>
        <div className="btn-container">
          <a href="https://github.com/amanvermao/Article_website-_uI_with_authorization" target='_blank'>
          <button
            className="btn btn-color-2 project-btn"
          >
            Github
          </button>
          </a>
         <a href="https://www.linkedin.com/in/aman-verma-243530220/recent-activity/all/" target='_blank'>
         <button
            className="btn btn-color-2 project-btn"
          >
            Live Demo
          </button>
         </a>
        </div>
      </div>
    </div>
      </div>
      <a href="#contact">
      <img
        src={arrow}
        alt="Arrow icon"
        class="icon arrow"
      />
      </a>
      </section>
    </div>
  )
}

export default Projects
