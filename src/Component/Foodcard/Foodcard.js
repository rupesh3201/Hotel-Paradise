import React from 'react'
import './../../Css/Foodcard.css'
function Foodcard({title, description}) {
    
  return (
    <div className='foodcard'>
      <h1 className='foodcard-title'>{title}</h1>
    <p>{description}</p>
    </div>
  )
}

export default Foodcard