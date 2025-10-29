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
                        <h1> Personal Info </h1>
                        <ul>
                            <li>
                                <span>Name </span>:  Hasib Hasan
                            </li>
                            <li>
                                <span>Age  </span>: 17
                            </li>
                            <li>
                                <span>Gender </span>: Male
                            </li>
                        </ul>

                    </div>
                    <div className="Education">
                        <h1> Education </h1>

                        <ul>
                            <li>
                                <span>Degree </span>: SSC : 2027
                            </li>
                            <li>
                                <span>Branch  </span>: Science
                            </li>
                            <li>
                                <span>Future Paln </span>:  Graduate in Computer Science
                            </li>
                        </ul>

                    </div>
                    <div className="skills">
                        <h1>Skills</h1>
                        <ul>
                            <li>
                                Front-End Web Developer
                            </li>
                            <li>
                                DSA (Practice)
                            </li>
                            <li>
                               React.js Node.js
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="rightabout">

            </div>
        </div>
    )
}

export default About