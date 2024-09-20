import React from 'react'
import './../../Css/Foodcard.css'
function Foodcard(props) {
    const {title,description} = props
  return (
    <div><h1>{title}</h1>
    <p>{description}</p>
    </div>
  )
}

export default Foodcard