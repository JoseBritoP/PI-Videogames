import React from 'react'
import { useState } from 'react'
import searchIcon from '../../image/icons/search.png'
import { getVideogamesBySearch, clearVideogamesBySearch} from '../../redux/actions'
import { useDispatch } from 'react-redux'
import style from './SearchBarComponent.module.css'
import { useNavigate } from 'react-router-dom'
const SearchBarComponent = (props) => {

  const navigate = useNavigate()
  const {resetPagination} = props

  const dispatch = useDispatch()
  
  const [inputValue, setInputValue] = useState("");
  const [hasSearch, setHasSearch] = useState(false);

  const handleSearchSubmit = () => {
    setHasSearch(true);
    handleSearchRequest();
    navigate('/home')
  };

  const handleSearchInput = (event) => {
    const query = event.target.value;
    setInputValue(query);
  };
  
  const handleSearchRequest = () => {
    if (inputValue.length < 4) return;
    if (/\d/.test(inputValue)) return;
    if (inputValue === "" || inputValue.trim() === "") return;
    dispatch(getVideogamesBySearch(inputValue.trim()));
  };
  
  const handleClearSearch = () => {
    if (inputValue === "" || inputValue.trim() === "") return;
    setInputValue("");
    setHasSearch(false);
    resetPagination()
    dispatch(clearVideogamesBySearch());
  };
  
  const searchDisabled = inputValue === "" || inputValue.trim() === "" || /\d/.test(inputValue) || inputValue.length < 3 || !/^[a-zA-Z0-9\s\-:.]+$/u.test(inputValue);

  return (
    <div className={style['searchbar-container']}>
      <img src={searchIcon} alt='search'/>
      <input type="text" value={inputValue} placeholder="Search..." onChange={handleSearchInput} />
      <button onClick={handleSearchSubmit} disabled={searchDisabled}>Search</button>
        {hasSearch && <button onClick={handleClearSearch}>Clear</button>}
    </div>
  )
}

export default SearchBarComponent