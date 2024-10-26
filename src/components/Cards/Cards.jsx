import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';
import AddPlayer from "../Addplayer/AddPlayer";
import { ToastContainer, toast } from 'react-toastify';

const Cards = ({handleIsActive, isActive, handleRemoveCoins, addcoin}) => {
    const [cards, setCards] = useState([]);
    useEffect( ()=>{
        fetch('Player.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])

    const [Addplayers, setAddplayers] = useState([]);
    const handleAddplayer = (card)=>{
      const isExist = Addplayers.find(prevAddplayers =>prevAddplayers.id === card.id)
      if (isExist) {
        toast.warning('Player already added!');
      } else if (Addplayers.length >= 6) {
        toast.error('Maximum of 6 players can be selected!');
      } else if (addcoin < card.price) {
        toast.error("Not enough coins to add this player!");
      } else {
        setAddplayers(prev => {
          if (!prev.find(player => player.id === card.id)) {
            handleRemoveCoins(card.price);
            toast.success('Player added successfully!');
            return [...prev, card];
          }
          return prev;
        });
      }
    }
    const handleRemovePlayer = (playerId) => {
      const updatedPlayers = Addplayers.filter(player => player.id !== playerId);
      setAddplayers(updatedPlayers);
  };
 
    
    return (

      <div className="w-[80%] mx-auto mb-64 my-10">
            <ToastContainer 
                position="top-right" 
                autoClose={3000} 
                hideProgressBar={false} 
                closeOnClick 
                pauseOnHover 
                draggable 
                pauseOnFocusLoss 
            />
        <div className="my-7 flex justify-between">
          <h2 className="text-lg font-semibold">Available Players</h2>
        <div className="">
        <button onClick={() => handleIsActive("available")} className={`${isActive.available?"btn bg-[#fce8c5]":"btn"}`}>available</button>
        <button onClick={() => handleIsActive("select")} className={`${isActive.available?"btn":"btn bg-[#fce8c5]"}`}>select</button>
        </div>
        </div>
        <div className="">
        {
  isActive.available ? (
    <div className="grid grid-cols-3 gap-4">
      {cards.map(card => (
        <Card
          key={card.id}
          card={card}
          handleAddplayer={handleAddplayer} 
          handleRemoveCoins={handleRemoveCoins}
        />
      ))}
    </div>
  ) : (
    <div className="">
      {
        <AddPlayer Addplayers={Addplayers} handleRemovePlayer={handleRemovePlayer}  handleIsActive={ handleIsActive}  />
      }
    </div>
  )
}  
      </div>
      </div>
    );
  };
  Cards.propTypes = {
    isActive: PropTypes.object.isRequired,
    handleRemoveCoins:PropTypes.func,
    handleIsActive:PropTypes.func,
    addcoin: PropTypes.number.isRequired,
}
  export default Cards;


 








  