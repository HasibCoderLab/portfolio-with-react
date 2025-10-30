import React from 'react'
import "./Projects.css"
import va from "../../assets/va.png"
import Card from '../Card/Card'
const Projects = () => {
  return (

    <div id="projects">
      <h1>1.5 Years Coding Experienced</h1>
      <div className="slider">
        {/* Card */}
        <Card title="Vartual Experienced"  image={va}/>
        <Card title="Vartual" image={va} />
        <Card title="Vartual" image={va} />
        <Card title="Vartual"  image={va}/>
        <Card title="Vartual"  image={va}/>
        <Card title="Vartual"  image={va}/>





      </div>
    </div>


  )
}

export default Projects