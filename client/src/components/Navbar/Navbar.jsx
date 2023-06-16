import React from 'react'
import {Link} from 'react-router-dom'
import style from './Navbar.module.css'
// import searchIcon from '../../image/icons/search.png'
// import { getVideogamesBySearch} from '../../redux/actions'
// import { useDispatch } from 'react-redux'
import SearchBarComponent from '../SearchBarComponent/SearchBarComponent'
const Navbar = (props) => {

  const {resetPagination} = props

  return (
    <nav>
      <div className={style['nav-container']}>
        <div className={style['nav-image']}>
        <h1>Logo videogames</h1>
        </div>

        <SearchBarComponent resetPagination={resetPagination}/>
        
        <div className={style['nav-routes']}>
          <Link to={"/home"} style={{textDecoration:"none"}}><h3>Home</h3></Link>
          <Link to="/create" style={{textDecoration:"none"}}><h3>Create a videogame!</h3></Link>
          <Link to="/" style={{textDecoration:"none"}}><h3>Log out</h3></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar