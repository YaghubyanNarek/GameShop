import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import ShowBasket from './ShowBasket';

export default function Header(props) {
  const [basket, setBasket] = useState(false);
  return (
    <header>
      <div className="header__logo">
        Game Shop
      </div>
      <ul className="header__menu">
        <div className="header__basktet">
          <FaShoppingCart
            onClick={() => {
              setBasket(!basket)
            }}
            className={`basket ${basket && 'active'}`}
          />
          <div className="header__count">{props.order.length}</div>
        </div>
        <li className='header__item'>Игры</li>
        <li className='header__item'>Оформить заказ</li>
        <li className='header__item'>Подключить аккаунт</li>
      </ul>
      {basket && (
        <div className='basket__open'>
          {props.order.length === 0 ? (
            <span className='basket__empty'>Товаров нет</span>
          ) :
            (
              props.order.map(el => (
                <ShowBasket order={el} key={el.id} onDelete={props.onDelete} />
              ))
            )}
        </div>
      )}
    </header>
  )
}
