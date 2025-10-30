import React from 'react'
import "./Projects.css"
import up from "../../assets/up.png"
import Card from '../Card/Card'
const Projects = () => {
  return (

    <div id="projects">
      <h1>1.5 Years Coding Experienced</h1>
      <div className="slider">
        {/* Card */}
        <Card title="Clone CodeChef Upgrade paln"  image={up}/>
        <Card title="Clone CodeChef Upgrade paln"  image={up}/>
        <Card title="Clone CodeChef Upgrade paln"  image={up}/>
        <Card title="Clone CodeChef Upgrade paln"  image={up}/>
        <Card title="Clone CodeChef Upgrade paln"  image={up}/>
        <Card title="Clone CodeChef Upgrade paln"  image={up}/>
        <Card title="Clone CodeChef Upgrade paln"  image={up}/>


      </div>
    </div>


  )
}

export default Projects