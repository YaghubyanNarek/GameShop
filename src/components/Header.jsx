import React, { useState,memo } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import ShowBasket from './ShowBasket';
import {Link} from  'react-router-dom'

export default memo(function Header(props) {
  const [basket, setBasket] = useState(false);
  return (
    <header>
      <div className="header__logo">
        <Link to='/' className='link header__logo-link'>Game Shop </Link>
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
        <li className='header__item'> Игры </li>
        <li className='header__item'>Оформить заказ</li>
        <li className='header__item'><Link to='ToOrder' className='link header__link'>Подключить аккаунт</Link></li>
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
})
