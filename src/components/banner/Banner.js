import React from 'react'
import { Link } from 'react-router-dom'
import "./Banner.css"

function banner() {
  return (
    <div className="banner">
      <h1><Link to="/">N I K O L A B I K T E L</Link></h1>
    </div>
  )
}

export default banner