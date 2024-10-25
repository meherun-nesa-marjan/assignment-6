import FooterLogo from '../../assets/images/logo-footer.png'
import myBg from '../../assets/images/bg-shadow.png'
const Footer = () => {
    return (
       <div className="relative">
        <div className="p-6 rounded-xl w-[80%] absolute left-[10%] bottom-[75%]  border-2">
            <div className="">
            <div className=" rounded-xl border-2 mx-auto bg-cover bg-no-repeat " style={{ backgroundImage: `url(${myBg})` }}>
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Subscribe to our Newsletter</h1>
      <p className="py-6">
      Get the latest updates and news right in your inbox!
      </p>
      <div className="">
      <input
        type="text"
        placeholder="Enter your email"
        className="input input-bordered " />
      <button className="btn bg-[#fce8c5] ">Subscribe</button>
    </div>
    </div>
  </div>
</div>
            </div>

        </div>
        <div className="bg-slate-900 pt-40">
            <div className="mx-auto w-[80%]">
                <div className="flex justify-center"><img src={FooterLogo} alt="" /></div>
            <footer className="flex justify-between footer  text-white p-10">
            <nav>
  <nav>
  <h6 className="footer-title text-white">About Us</h6>
 <p>We are a passionate team </p>
 <p>dedicated to providing the</p>
 <p>best services to our customers.</p>
</nav>
    
  </nav>
  <nav>
  <h6 className="footer-title text-white">Quick Links</h6>
  <a className="link link-hover">Home</a>
  <a className="link link-hover">Services</a>
  <a className="link link-hover">About</a>
  <a className="link link-hover">Contact</a>
</nav>
  <nav>
  <form>
  <h6 className="footer-title text-white">Subscribe</h6>
  <fieldset className="form-control w-80">
    <label className="label">
      <span className="label-text text-white">Subscribe to our newsletter for the latest updates.</span>
    </label>
    <div className="join">
      <input
        type="text"
        placeholder="Enter your email"
        className="input input-bordered join-item" />
      <button className="btn bg-[#fce8c5] join-item">Subscribe</button>
    </div>
  </fieldset>
</form>
  </nav>
</footer>
<hr />
<footer className="footer footer-center text-white py-9">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - Your Company All Rights Reserved.</p>
  </aside>
</footer>
            </div>
        </div>
       </div>
       

        
      
    );
  };
  
  export default Footer;




 


