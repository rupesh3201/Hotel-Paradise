import React from 'react'
import './../Css/Home.css'
import Foodcard from '../Component/Foodcard/Foodcard'
import { MAIN_TITLE } from '../Config/Data';
import { Products } from '../Config/Data';
function Home() {
  return (
    <div>
      <h1 className='nav'>{MAIN_TITLE} </h1>
      <br></br>

      <div className='food-item-container'>
      {Products.map((foodItem)=>{   
           return<Foodcard 
           imgurl={foodItem.imgurl}  title={foodItem.title} description={foodItem.description}   isveg={foodItem.isveg} Cost={foodItem.Cost} />
})}

      </div>
    </div>
  );
}

export default Home