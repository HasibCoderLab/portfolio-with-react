import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import man from "../../assets/man.png";
import './Home.css';

const Home = () => {
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">Hasib Hasan</div>
          <div className="line3">
            <Typewriter
              words={['Web Developer', 'React Developer']}
              loop
              cursor
              cursorStyle='_|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  );
};

export default Home;
