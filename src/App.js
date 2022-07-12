import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

function App() {
  const [order, setOrder] = useState([])
  return (
    <div className="App">
      <Header order={order} onDelete={DeleteBasket} />
      <Items Add={addOrDelete} order={order} />
      <Footer />
    </div>
  )

  function addOrDelete(item) {
    if (order.filter(el => el.id === item.id).length) {
      setOrder(order.filter(el => el.id !== item.id))
    } else {

        setOrder([...order,item])
    }
  }

  function DeleteBasket(id) {
    setOrder(order.filter(el => el.id !== id))
  }
}


export default App;
