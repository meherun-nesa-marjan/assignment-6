import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';
import AddPlayer from "../Addplayer/AddPlayer";


const Cards = ({handleIsActive, isActive}) => {
 
    const [cards, setCards] = useState([]);
    useEffect( ()=>{
        fetch('Player.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])
   
    
    return (
      <div className="w-[80%] mx-auto mb-64 my-10">
        <div className="my-7 flex justify-between">
          <h2 className="text-lg font-semibold">Available Players</h2>
        <div className="">
        <button onClick={() => handleIsActive("available")} className={`${isActive.available?"btn bg-[#fce8c5]":"btn"}`}>available</button>
        <button onClick={() => handleIsActive("select")} className={`${isActive.available?"btn":"btn bg-[#fce8c5]"}`}>select</button>
        </div>
        </div>
        <div className="">
        {
          isActive.available? <div className="grid grid-cols-3 gap-4">
          {cards.map(card => (
               <Card
                 key={card.id}
               card={card}
             />
           ))}
        </div>:<AddPlayer></AddPlayer>

 
         
        }
        
      </div>

         
           
         
        
       

      </div>
    );
  };
  

  Cards.propTypes = {
    isActive: PropTypes.object.isRequired,
    handleIsActive:PropTypes.func
}
  export default Cards;


 
