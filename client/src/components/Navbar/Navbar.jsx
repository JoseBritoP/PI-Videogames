import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import style from './Navbar.module.css'
import SearchBarComponent from '../SearchBarComponent/SearchBarComponent'
import logo from '../../image/logo.png'
import NavbarModal from './NavbarModal/NavbarModal'

const Navbar = (props) => {
  const {resetPagination} = props
  const {pathname} = useLocation();
  const [modal,setModal] = React.useState(false);

  const handleModal = () => {
    setModal(true);
    if(modal === true){
      setModal(false)
    }
  };
  return (
    <nav>
      <div className={style['nav-container']}>
        <div className={style['nav-image']}>
          {/* <h1>Logo videogames</h1> */}
          <Link to="/home">
            <img src={logo} alt='logo'/>
          </Link>
        </div>

        <SearchBarComponent resetPagination={resetPagination}/>

        <div className={style['nav-routes']}>
          <Link to={"/home"} style={{textDecoration:"none"}}><h3 className={pathname === '/home' ? style["active"] : ""}>Home</h3></Link>
          <Link to="/create" style={{textDecoration:"none"}}><h3 className={pathname === '/create' ? style["active"] : ""}>Create a videogame!</h3></Link>
          <Link to="/" style={{textDecoration:"none"}}><h3>Log out</h3></Link>
          {/* <input type='button' value="Explore" onClick={handleModal}/> */}
            {modal && <NavbarModal/>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar