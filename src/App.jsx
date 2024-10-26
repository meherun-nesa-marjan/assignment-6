import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'; 
import Header from './components/Header/Header'
import Bannar from './components/Bannar/Bannar'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import { useState } from 'react'




function App() {
  const [isActive, setIsActive] = useState({
    available:true,
    status:"available"
  })
  const handleIsActive = (status) =>{
    if (status == "available"){
      setIsActive({
        available:true,
       status:"available"
      })
    }
    else{
      setIsActive({
        available:false,
       status:"select"
      })

    }
   
  }
  const [addcoin, setAddcoin] = useState(0);
  
 
 
  const handleAddCoin = () => {
    setAddcoin(prevCoins => prevCoins + 90000);
    toast.success("coins added successfully!");
  };
  const handleRemoveCoins = (price) => {
    setAddcoin(prevCoins => prevCoins - price);
};
 
  return (
    <>
   
   <Header  addcoin={addcoin}></Header>
    <Bannar handleAddCoin={handleAddCoin}></Bannar>
    <Cards handleIsActive={handleIsActive}handleRemoveCoins={handleRemoveCoins} isActive={isActive} addcoin={addcoin}></Cards>
    <Footer></Footer>
   

    </>
  )
}

export default App
