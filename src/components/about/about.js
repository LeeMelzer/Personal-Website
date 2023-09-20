import React from 'react'
import "./about.css"
import RSS from "../../assets/rss.jpg"
import {FaAward} from "react-icons/fa"
import {GiTiedScroll} from "react-icons/gi"
import {RiComputerLine} from "react-icons/ri"

const About = () => {
  return (
    <section id="about">
      <h5>Learn More</h5>
      <h2>About Me</h2>

      <div className="about__container">
        <div className="about__me">
            <div className="about__me-rss">
              <img src={RSS} alt="me at UCSD graduation" />
            </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>US Navy</h5>
              <small>Aviation Rescue Swimmer</small>
            </article>

            <article className="about__card">
              <GiTiedScroll className="about__icon"/>
              <h5>UCSD</h5>
              <small>Bachelor of Human Biology 3.8 gpa</small>
            </article>

            <article className="about__card">
              <RiComputerLine className="about__icon"/>
              <h5>National University</h5>
              <small>Master of Computer Science 3.9 gpa</small>
            </article>
          </div>

          <p>
          Originally from a small town in Iowa, I graduated high school and joined the US Navy where I spent six years as an Aviation Rescue Swimmer. 
          During my service, I flew 800+ Search and Rescue / Humanitarian Aid missions all over the world including open-water rescues from the North and 
          South Pacific to the Persian Gulf, and over-land rescues in Japan 2011 (pictured left) and Pakistan. After the Navy, I attended UCSD where I 
          received a Bachelor of Human Biology and National University where I received a Master of Computer Science. I am now using my unique experience 
          to create an exceptional career in software development. I thrive in high-stress environments and, having worked with some of the most elite teams
          in the world, have obtained an expertise in working and contributing as a member of a team.
            </p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About