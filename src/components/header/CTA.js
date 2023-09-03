import React from 'react'
import Lee_Melzer from "../../assets/Lee_Melzer.pdf"

const CTA = () => {
  return (
    <div className="cta">
        <a href={Lee_Melzer} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA