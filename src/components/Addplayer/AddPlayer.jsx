import Player from "../Player/Player";
import PropTypes from 'prop-types';

const AddPlayer = ({Addplayers,handleRemovePlayer, handleIsActive}) => {
   
    return (
        <div className='h-fit p-5 rounded-md  border-2'>
         <div className="mx-5">
                 {Addplayers.length < 6 
                ? `Selected Player (${Addplayers.length}/6)` 
                : `Maximum players selected (6/6)`}
         </div>
            
        
         {
            Addplayers.map(player => <Player key={player.id} player={player} handleRemovePlayer={handleRemovePlayer}></Player>)
         }
          <div className="mx-5">
        <button onClick={() => handleIsActive("available")}  className="btn bg-[#fce8c5]">Add More Player</button>
        </div>
        </div>
    );
};
AddPlayer.propTypes = {
    Addplayers: PropTypes.array.isRequired,
    handleRemovePlayer: PropTypes.func,
    handleIsActive: PropTypes.func.isRequired,
    
}
export default AddPlayer;


