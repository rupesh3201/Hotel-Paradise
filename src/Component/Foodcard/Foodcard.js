import React from 'react'
import './../../Css/Foodcard.css'
function Foodcard(props) {
  return (
    <div><h1>{props.title}</h1>
    <p>{props.description}</p>
    </div>
  )
}

export default Foodcard