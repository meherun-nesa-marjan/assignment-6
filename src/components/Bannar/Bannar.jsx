import myBg1 from '../../assets/images/banner-main.png'
import myBg from '../../assets/images/bg-shadow.png'
import PropTypes from 'prop-types';
const Bannar = ({handleAddCoin}) => {
  return (
    <div className="rounded-xl mx-auto bg-slate-800 w-full lg:w-[80%] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${myBg})` }}>
        <div className="lg:mx-auto w-full  py-8 lg:w-[80%] ">
     <div className="hero-content text-center">
    <div className="">
        <div className='py-5 flex justify-center'>
        <img src={myBg1} alt="" />
        </div>
      <h1 className="text-5xl text-white font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="text-white py-6">
      Beyond Boundaries Beyond Limits
      </p>
      <button onClick={handleAddCoin} className="btn bg-[#fce8c5]">Claim Free Credit</button>
    </div>
  </div>
</div>
    </div>
  );
};
Bannar.propTypes = {

  handleAddCoin: PropTypes.func.isRequired

}
export default Bannar;
