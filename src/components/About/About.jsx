import React from 'react'
import "./About.css"
const About = () => {
    return (
        <div id="about">
            <div className="leftabout">
                <div className="cirele-line">
                    {/* ================ 1st=================== */}
                    <div className="cirele"> </div>
                    <div className="line"></div>
                    {/* ================ 2nd   =================== */}

                    <div className="cirele"> </div>
                    <div className="line"></div>

                    {/* ================ 3rd =================== */}
                    <div className="cirele"> </div>
                    <div className="line"></div>
                </div>
                {/* ========================== aboutdetails ========================= */}
                <div className="aboutdetails">
                    <div className="personalinfo">
                        <h1>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="rightabout">

            </div>
        </div>
    )
}

export default About