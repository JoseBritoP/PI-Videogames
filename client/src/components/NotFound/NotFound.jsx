import React,{useState} from 'react'
import style from './NotFound.module.css';
import { filterCreated } from '../../redux/actions';
import { useDispatch } from 'react-redux';
const NotFound = () => {
  const dispatch = useDispatch();

  const resetSearch = () =>{
    dispatch(filterCreated("clear"))
  }
  return (
    <div className={style['container']}>
      <h1>Not a videogame here!</h1>
      <button onChange={resetSearch}> Restart? </button>
    </div>
  )
}

export default NotFound