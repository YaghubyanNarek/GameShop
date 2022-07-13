import React, { memo } from 'react'

export default memo(function Item(props) {
  return (
    <div className='item'>
        <img src={props.item.image} />
        <h2>{props.item.title}</h2>
        <p className='genres'><span>{props.item.genres[0]}</span><span>{props.item.genres[1]}</span>
            {props.item.genres[2] !== undefined && (<span>{props.item.genres[2]}</span>)}
        </p>
        <p>{props.item.description}</p>
        <b>{props.item.price} Руб.</b>
        <button 
            className='item__button'
            onClick={() => {props.Add(props.item)}}
        >{ !props.order.filter(({ id }) => id === props.item.id).length ?
          <>Добавить в корзину</>
          : <>Удалить из корзины</>
      }</button>
    </div>
  )
})
