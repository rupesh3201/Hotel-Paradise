import React from 'react'
import Foodcard from '../Component/Foodcard/Foodcard'
function Home() {
  return (
    <div>
      <h1>Hotel Paradise </h1>
      <Foodcard title="Delicious Pizza" description="A delightful cheesy pizza with fresh toppings!" />
      <Foodcard title="Tasty Burger" description="A juicy beef burger with crispy fries." />
    </div>
  );
}

export default Home