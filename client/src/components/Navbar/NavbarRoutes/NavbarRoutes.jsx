import React from 'react';
import style from './NavbarRoutes.module.css';
import { useLocation,Link } from 'react-router-dom';

const NavbarRoutes = () => {

  const {pathname} = useLocation();
  
  return (
    <div className={style['nav-routes']}>
          <Link to={"/home"} style={{textDecoration:"none"}}><h3 className={pathname === '/home' ? style["active"] : ""}>Home</h3></Link>
          <Link to="/create" style={{textDecoration:"none"}}><h3 className={pathname === '/create' ? style["active"] : ""}>Create a videogame!</h3></Link>
          <Link to="/" style={{textDecoration:"none"}}><h3>Log out</h3></Link>
        </div>
  )
}

export default NavbarRoutes