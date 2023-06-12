import React from 'react'
import style from './Aside.module.css'
const Aside = () => {
  return (
    <div className={style['aside-container']}>
      <div className={style['aside-order']}>
        <h1>Order By:</h1>
        <p>ASC</p>
        <p>DESC</p>
      </div>
      <div className={style['aside-filtered']}>
        <h1>Filtered by:</h1>
        <p>Genres</p>
        <p>Rating</p>
        <p>Released</p>
      </div>
    </div>
  )
}

export default Aside