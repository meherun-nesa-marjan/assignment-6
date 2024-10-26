import PropTypes from 'prop-types';

const Card = ({card, handleAddplayer}) => {
    const {name,img,team,role,age,runs,price} = card
   
    return (
        <div>
            <div className="card m-5 md:m-0 card-compact bg-base-100 w-fitt shadow-xl">
  <figure className='p-5'>
    <img className='rounded-lg'
      src={img}
      alt="player" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><i className="fa-solid fa-user"></i>{name}</h2>
        <div className="flex my-3 justify-between">
        <p className='text-lg'><span className='mr-3'><i className="fa-solid fa-flag"></i></span>{team}</p>
        <button className="btn">{role}</button>
        </div>
        <hr />
        <div className="text-lg font-bold">
        <p>Age: {age}</p>
        <p>Run: {runs}</p>
        </div>
    <div className="card-actions my-3">
       <p>Price:$ {price}</p>
       <button 
  onClick={() => {
    handleAddplayer(card);
   
         }} 
        className="btn">
         Choose Player
    </button>
       
    
    </div>
  </div>
</div>
        </div>
    );
};
Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleAddplayer: PropTypes.func.isRequired, 
  handleRemoveCoins:PropTypes.func
};

export default Card;