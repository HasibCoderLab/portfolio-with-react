import React from 'react'
import "./Contact.css"
import con from "../../assets/contact.png"
const Contact = () => {
  return (
    <div id="contact">
      <div className="leftcontent">
        <img src={con} alt="" />
      </div>
      {/* ============== rightcontent ========= */}
      <div className="rightcontent">
        <form action="#">
          <input name='username' type="text" placeholder='Name' />
          <input type="email" name="email" id="" placeholder='Email' />
          <textarea name="massage" id="textarea" placeholder='Write Text' ></textarea>
          <input type="submit" id="btn"  value="submit" />
        </form>
      </div>
    </div>
  )
}

export default Contact