import React from 'react'
import { Link } from 'react-scroll'
import "./Nav.css"
const Nav = () => {
  return (
    <div>
      <nav>
        <h1>Hasib Hasan</h1>

        <ul className='PcMenu'>
          <Link to="home" activeClass="active" spy={true} smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}>
            <li>About</li>
          </Link>
          <Link to="project" activeClass="active" spy={true} smooth={true} duration={500}>
            <li>Projects</li>
          </Link>
          <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}>
            <li>Contact</li>
          </Link>
</ul>
          {/* =========================  mobileMenu   ========================================= */}
        {/* Hambarger Menu */}
        <div className="hambarger">
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>
        <ul className='mobileMenu'>
          <Link to="home" activeClass="active" spy={true} smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}>
            <li>About</li>
          </Link>
          <Link to="project" activeClass="active" spy={true} smooth={true} duration={500}>
            <li>Projects</li>
          </Link>
          <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}>
            <li>Contact</li>
          </Link>


        </ul>
      </nav>
    </div>
  )
}

export default Nav