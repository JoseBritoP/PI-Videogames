import React from 'react'
import style from './AsideFilter.module.css'
import { useDispatch } from 'react-redux';
import { filteredVideogamesByGenre } from '../../../redux/actions';
import useAsideSetters from '../../../hooks/useAsideSetters';
import AsideOrigin from '../AsideOrigin/AsideOrigin';
import { useSelector } from 'react-redux';
const AsideFilter = (props) => {

  const {resetPagination} = props;
  const dispatch = useDispatch();

  const {setGenreInput, setAlpOrder, setRatingOrder } = useAsideSetters();
  const genres = useSelector (state => state.getAllGenres)

  const handleGenreFChange = (event) => {
    const genreValue = event.target.value;
    setGenreInput(genreValue);
    if (genreValue !== "All") { 
      resetPagination();
      setAlpOrder("---");
      setRatingOrder(0);
    }
    dispatch(filteredVideogamesByGenre(genreValue));
  };

  return (
    <div className={style['aside-filtered']}>
    <h1>Filter by:</h1>
    <p>Genres</p>
    <select name="genre" id="" onChange={handleGenreFChange}>
      <option value="All">---</option>
      <option value="All">All</option>
    {genres?.map((genre) => (
      <option key={genre.id} value={genre.name}>{genre.name}</option>
    ))}
    </select>
    <AsideOrigin resetPagination= {resetPagination}/>
  </div>
  )
}

export default AsideFilter