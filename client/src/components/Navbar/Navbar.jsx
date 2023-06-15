import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import style from './Navbar.module.css'
import searchIcon from '../../image/icons/search.png'
import { getVideogamesBySearch} from '../../redux/actions'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch();
  
  const [inputValue, setInputValue] = useState("");
  const [hasSearch, setHasSearch] = useState(false);

  const handleSearchSubmit = () => {
    setHasSearch(true);
    handleSearchRequest();
  };

  const handleSearchInput = (event) => {
    const query = event.target.value;
    setInputValue(query);
  };

  const handleClearSearch = () => {
    if (inputValue === "" || inputValue.trim() === "") {
      return
    };
    setInputValue("");
    setHasSearch(false);
    dispatch(getVideogamesBySearch([]));
  };

  const handleSearchRequest = () => {
    if (inputValue.length <= 4) return;
    if (/\d/.test(inputValue)) return;
    if (inputValue === "" || inputValue.trim() === "") return;
    dispatch(getVideogamesBySearch(inputValue));
  };

  const searchDisabled = inputValue === "" || inputValue.trim() === "" || /\d/.test(inputValue) || inputValue.length <= 4 || !/^[A-Za-z0-9:]+$/.test(inputValue); 

  return (
    <nav>
      <div className={style['nav-container']}>
        <div className={style['nav-image']}>
        <h1>Logo videogames</h1>
        </div>
        <div className={style['nav-search']}>
          <img src={searchIcon} alt='search'/>
          <input type="text" value={inputValue} placeholder="Search..." onChange={handleSearchInput} />
        <button onClick={handleSearchSubmit} disabled={searchDisabled}>Search</button>
        {hasSearch && <button onClick={handleClearSearch}>Clear</button>}
        </div>
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