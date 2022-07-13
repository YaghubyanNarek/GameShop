import React, {memo} from 'react'
import { FaTrash } from 'react-icons/fa'
export default memo(function ShowBasket(props) {
  return (
    <div className='Basket'>
        <img src={props.order.image} />
        <div className="basket__info">
            <p>{props.order.title}</p>
            <b>{props.order.price}Руб.</b>
        </div>
        <FaTrash 
            className='delete-from-basket' 
            onClick={() =>{
                props.onDelete(props.order.id)
            }}
        />
    </div>
  )
})
