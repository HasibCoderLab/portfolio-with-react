import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"

const Home = () => {
  return (

    <div id="home">
      <div className="lefthome">

      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>

  )
}

export default Home