import React, { useState } from 'react'

export default function Item(props) {
  return (
    <div className='item'>
        <img src={props.item.image} />
        <h2>{props.item.title}</h2>
        <p>{props.item.description}</p>
        <b>{props.item.price} Руб.</b>
        <button 
            className='item__button'
            onClick={() => {props.Add(props.item)}}
        >добавить в корзину</button>
    </div>
  )
}
