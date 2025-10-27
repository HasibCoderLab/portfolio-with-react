import React from 'react'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <div>
      <nav>
        <h1>Hasib Hasan</h1>
        <ul>


          <Link> <li>Home</li></Link>
          <Link>  <li>About</li></Link>
          <Link><li>Projects</li> </Link>
          <Link> <li>Contact</li></Link>


        </ul>
      </nav>
    </div>
  )
}

export default Nav