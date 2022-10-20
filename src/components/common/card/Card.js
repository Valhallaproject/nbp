/* eslint-disable no-template-curly-in-string */
import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
import Img1 from "./../../../assets/banner.jpeg"

const categories = [
    {
        name: "cat1",
        link: "/cat1",
        img: Img1
    },
    {
        name: "cat2",
        link: "/cat2",
        img: Img1
    },
    {
        name: "cat3",
        img: Img1
    },
    {
        name: "cat3",
        img: Img1
    }
]

function Card() {
  return (
    <>
        {categories.map((theme) => (
        <Link to={theme.link}>
        <div className="card" style={{ backgroundImage:`url(${theme.img})` }}>
            <h3>{theme.name}</h3>
            </div></Link>
        ))}
    </>
  )
}

export default Card