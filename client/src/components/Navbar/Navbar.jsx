import React from 'react'
import {Link} from 'react-router-dom'
import style from './Navbar.module.css'
import searchIcon from '../../image/icons/search.png'

const Navbar = () => {
  return (
    <nav>
      <div className={style['nav-container']}>
        <div className={style['nav-image']}>
        <h1>Logo videogames</h1>
        </div>
        <div className={style['nav-search']}>
          <img src={searchIcon} alt='search'/>
          <input type="text" name="search" id="" placeholder='Search a videogame...'/>
        </div>
        <div className={style['nav-routes']}>
          <Link to={"/home"}><h3>Home</h3></Link>
          <Link to="/create"><h3>Create a videogame!</h3></Link>
          <Link to="/"><h3>Log out</h3></Link>
        </div>
      </div>
        {/* <SearchBar onSearch={onSearch}/> */}
    </nav>
  )
}

export default Navbar