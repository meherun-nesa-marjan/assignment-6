import './App.css'
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
  console.log(isActive)
  const [addcoin, setAddcoin] = useState(0);
  const handleAddCoin = () =>{
    setAddcoin(prevCoins => prevCoins + 600000000);
  }

  return (
    <>
   
    <Header addcoin={addcoin}></Header>
    <Bannar handleAddCoin={handleAddCoin}></Bannar>
    <Cards handleIsActive={handleIsActive} isActive={isActive}></Cards>
    <Footer></Footer>
   

    </>
  )
}

export default App
