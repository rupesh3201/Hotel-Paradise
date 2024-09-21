import React from 'react'
import './../Css/Home.css'
import Foodcard from '../Component/Foodcard/Foodcard'
import paratha from '../Assets/Food_images/Pratha.jpg'
import Biryani from './../Assets/Food_images/Biryani.jpg'
import curry from './../Assets/Food_images/Chiken  cuury.jpg'
import pannir from './../Assets/Food_images/panner.jpg'
import dosa from './../Assets/Food_images/Masaladosa.jpg'
import crab from './../Assets/Food_images/curry-7249247_1280.jpg'
import crabcuryy from './../Assets/Food_images/maxresdefault.jpg'
function Home() {
  return (
    <div>
      <h1 className='nav'>Hotel Paradise </h1>
      <br></br>

      <div className='food-item-container'>
      <Foodcard imgurl={Biryani}  title="Chikan Biryani" description=" Biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot." isveg={false}/>
      <Foodcard imgurl={paratha}  title="Aloo Paratha" description="Aloo Paratha are Indian Breakfast flatbreads made with whole wheat flour, boiled potatoes, spices & herbs. " isveg={true} />
      <Foodcard imgurl={curry}  title="Chicken Curry" description="Chicken curry or curry/curried chicken is a South Asian dish originating from the Indian subcontinent." isveg={false} />
      <Foodcard imgurl={pannir }  title=" Paneer Tikka" description=" Paneer Tikka it made with less oils can be a healthy and diet food. " isveg={true} />
      <Foodcard imgurl={crabcuryy} title="Crab Curry " description="Crab curry A healthy food that is a good source of protein.  " isveg={false} />
      <Foodcard imgurl={dosa}  title="Masala Dosa" description="Masala Dosa is one of the most popular South Indian breakfast dishes served in restaurants and tiffin centres.  " isveg={true} />
      <Foodcard imgurl={crab}  title="Kaju Masala Curry " description="Kaju Masala Curry is a rich, creamy curry made with cashews and a blend of aromatic spices . " isveg={true} />
      <Foodcard imgurl={paratha}  title="Egg Curry" description="Egg curry is a comforting Indian dish of curried eggs. It is basically made with hard boiled eggs, onions, tomatoes, whole & ground spices and herbs. " isveg={false} />
      <Foodcard imgurl={paratha}  title="Fish curry" description="A savory dish made with paanch phoran seeds and a pinch of red chili spice.  " isveg={true} />

      </div>
    </div>
  );
}

export default Home