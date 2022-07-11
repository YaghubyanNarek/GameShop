import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";


function App() {
   const [order,setOrder] = useState([])
  return (
    <div className="App">
      <Header order={order} onDelete={DeleteBasket} />
      <Items Add={AddToBasket} />
      <Footer />
    </div>
  )
  function AddToBasket (item) {
    let isInArray = false
    order.forEach(el =>{
      if(el.id === item.id) {
        isInArray = true
      }
    })
    if(!isInArray){
      setOrder([...order,item])
    }
  }
  function DeleteBasket(id) {
    setOrder(order.filter(el => el.id !== id))
  }
}


export default App;
