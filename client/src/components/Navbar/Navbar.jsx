import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import style from './Navbar.module.css'
import SearchBarComponent from '../SearchBarComponent/SearchBarComponent'
import logo from '../../image/logo.png'
const Navbar = (props) => {
  const {pathname} = useLocation()
  const {resetPagination} = props

  return (
    <nav>
      <div className={style['nav-container']}>
        <div className={style['nav-image']}>
          {/* <h1>Logo videogames</h1> */}
        <img src={logo} alt='logo'/>
        </div>

        <SearchBarComponent resetPagination={resetPagination}/>
        <div className={style['nav-routes']}>
          <Link to={"/home"} style={{textDecoration:"none"}}><h3 className={pathname === '/home' ? style["active"] : ""}>Home</h3></Link>
          <Link to="/create" style={{textDecoration:"none"}}><h3 className={pathname === '/create' ? style["active"] : ""}>Create a videogame!</h3></Link>
          <Link to="/" style={{textDecoration:"none"}}><h3>Log out</h3></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar