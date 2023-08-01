import React from 'react'
import NavbarRoutes from '../NavbarRoutes/NavbarRoutes';
import style from './NavbarModal.module.css'

const NavbarModal = () => {

  return (
    <div className={style['modal-container']}>
      <NavbarRoutes/>
    </div>
  )
}

export default NavbarModal