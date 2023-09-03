import React from 'react'
import "./projects.css"
import GAMEGRAPHIC from "../../assets/GameGraphic.jpg"
import PERSONAL from "../../assets/reactIcon.png"
import FLAG from "../../assets/flag.jpg"


const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img className="project-image" src={GAMEGRAPHIC} alt="image of asteroid" />
          </div>
          <h3>The STEM Arcade (Master's Project)</h3>
          <div className="portfolio__item-text">
            <p>The STEM Arcade is a web application hosting video games that teach core mathematical concepts and science basics to elementary and middle school students. Ongoing updates.
            </p>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img className="project-image" src={PERSONAL} alt="image of asteroid" />
          </div>
          <h3>leemelzer.io</h3>
          <div className="portfolio__item-text">
            <p>My personal website and blog (you are here) where I discuss topics in computing, current projects, and lessons / technologies I learn as I continue to expand my knowledge.
            </p>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img className="project-image" src={FLAG} alt="image of asteroid" />
          </div>
          <h3>Veteran's Project (Currently in development)</h3>
          <div className="portfolio__item-text">
            <p>A web application designed to create an online community for veterans struggling with PTSD to connect, share their stories, and give / receive support. Estimated launch 2023.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects