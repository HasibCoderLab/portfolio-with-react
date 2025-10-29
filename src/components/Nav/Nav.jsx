import React, { useRef } from 'react'
import { Link } from 'react-scroll'
import "./Nav.css"

const Nav = () => {
  const menu = useRef();
  const mobile = useRef();

  // Function to close mobile menu after click
  const closeMenu = () => {
    mobile.current.classList.remove("activemobile");
    menu.current.classList.remove("activeham");
  };

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

        {/* Hamburger Menu */}
        <div
          className="hambarger"
          ref={menu}
          onClick={() => {
            mobile.current.classList.toggle("activemobile");
            menu.current.classList.toggle("activeham");
          }}
        >
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>

        {/* Mobile Menu */}
        <ul className='mobileMenu' ref={mobile}>
          <Link to="home" onClick={closeMenu} activeClass="active" spy={true} smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="about" onClick={closeMenu} activeClass="active" spy={true} smooth={true} duration={500}>
            <li>About</li>
          </Link>
          <Link to="project" onClick={closeMenu} activeClass="active" spy={true} smooth={true} duration={500}>
            <li>Projects</li>
          </Link>
          <Link to="contact" onClick={closeMenu} activeClass="active" spy={true} smooth={true} duration={500}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
