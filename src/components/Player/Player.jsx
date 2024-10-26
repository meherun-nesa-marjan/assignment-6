import PropTypes from 'prop-types';

const Player = ({player, handleRemovePlayer}) => {
    
    const {name,img,runs} = player;
    return (
        <div className="">
            <div className='flex  border-2 rounded-md m-5 p-5 justify-between'>
           <div className="flex justify-between">
          <div className="w-20 mr-5 h-full">
            <img className='rounded-md' src={img} alt="" />
          </div>
            <div className="">
                <h1>{name}</h1>
                <p>Run:{runs}</p>
            </div>
           </div>

            <div className="">
            <i className="fa-solid fa-trash" onClick={() => handleRemovePlayer(player.id)} 
             title="Remove Player"></i>
            </div>
        </div>
       
        </div>
    );
};
Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleRemovePlayer: PropTypes.func
}
export default Player;
