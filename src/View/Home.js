import React from 'react'
import Foodcard from '../Component/Foodcard/Foodcard'

import Biryani from './../Assets/Food_images/Biryani.jpg'
function Home() {
  return (
    <div>
      <h1>Hotel Paradise </h1>

      <Foodcard imgurl={Biryani}  title="Chikan Biryani" description=" Biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot." isveg={false}/>
      <Foodcard title="Tasty Burger" description="A juicy beef burger with crispy fries. " isveg={false} />
    </div>
  );
}

export default Home