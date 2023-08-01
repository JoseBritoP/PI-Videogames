import React from 'react'
import style from './ModalDeleteConfirmation.module.css'

const ModalDeleteConfirmation = () => {

  return (
    <div className={style['modal']}>
      <h1>The videogamecard was successfully delete! Sadly {":("}</h1>
    </div>
  )
}

export default ModalDeleteConfirmation