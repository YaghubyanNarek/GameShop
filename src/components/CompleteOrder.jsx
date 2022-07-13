import React, { memo } from 'react'

export default memo(function CompleteOrder() {
  return (
    <form action="#" className='complete__form'>
      <h2>Войдите в аккаунт</h2>
      <input type="text" placeholder='Имя' />
      <input type="text" placeholder='Фамиля' />
      <input type="email" placeholder='E-mail' />
      <input type="text" placeholder='Телефон' />
      <input type="password" placeholder='Придумайте пароль' />
      <div className="gender">
        <label>
          <input type="radio" name='gender' />
          Мужской
        </label>
        <label>
          <input type="radio" name='gender' />
          Женский
        </label>
      </div>
      <input type="submit" />
    </form>
  )
})
