import React from 'react'
import Insta from "./../../assets/instagram.png"
import "./Contact.css"

function Contact() {
  return (
    <div className="contact">
      <h2>CONTACT</h2>
      <form>
        <label>
          <input type="text" placeholder="Name"/>
        </label>
        <label>
          <input type="email" placeholder="E-mail"/>
        </label>
        <label>
          <textarea type="text" placeholder="Message"/>
        </label>
        <button type="submit"className="button">Send</button>
      </form>
      <h2>SOCIAL MEDIA</h2>
      <img src={Insta} alt="instagramLogo" className="insta"/>
      <p>© NIKOLA BIKTEL. All rights reserved.</p>
    </div>
  )
}

export default Contact