import Logo from '../../assets/images/logo.png'
import Coin from '../../assets/images/coin.png'
import PropTypes from 'prop-types';
const Header = ({addcoin}) => {
    return (
      <div className='md:container lg:mx-auto py-10'>
          <div className='lg:mx-auto lg:w-[80%]'>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <a className=" text-xl"><img src={Logo} alt="" /></a>
  </div>

  <div className="navbar-end ">
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal text-xl px-1">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
    </ul>
  </div>
    <a className="btn text-xl"><span>{addcoin.toLocaleString()}</span> Coin <img src={Coin} alt="" /></a>
  </div>
</div>
      </div>
      </div>
    
    );
  };
  Header.propTypes = {
    addcoin: PropTypes.number.isRequired,
    handleAddCoin: PropTypes.func.isRequired
  
  }
  export default Header;
