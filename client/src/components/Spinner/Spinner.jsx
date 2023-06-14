import React from 'react'
import style from './Spinner.module.css'
const Spinner = () => {
  return (
  <div className={style["sk-chase"]}>
    <div className={style["sk-chase-dot"]}></div>
    <div className={style["sk-chase-dot"]}></div>
    <div className={style["sk-chase-dot"]}></div>
    <div className={style["sk-chase-dot"]}></div>
    <div className={style["sk-chase-dot"]}></div>
    <div className={style["sk-chase-dot"]}></div>
  </div>
  )
}

export default Spinner