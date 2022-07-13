import { useCallback, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import {
  Routes,
  Route
} from "react-router-dom";
import CompleteOrder from "./components/CompleteOrder";

function App() {
  const [order, setOrder] = useState([])

  const addOrDelete = useCallback((item) => {
    if (order.filter(el => el.id === item.id).length) {
      setOrder(order.filter(el => el.id !== item.id))
    } else {

      setOrder([...order, item])
    }
  }, [order])

  const DeleteBasket = useCallback((id) => {
    setOrder(order.filter(el => el.id !== id))
  }, [order])
  return (
    <div className="App">
      <Header order={order} onDelete={DeleteBasket} />
      <Routes>
        <Route path="/" element={
          <>
            <Items Add={addOrDelete} order={order} />
          </>
        }>
        </Route>
        <Route path="/ToOrder" element={
          <>
            <CompleteOrder />
          </>
        }>
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}


export default App;
