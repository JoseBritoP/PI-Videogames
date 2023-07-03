import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Landing.module.css'
import { useDispatch } from 'react-redux';
import { getAllGenres, getAllVideogames,getAllPlatforms } from '../../redux/actions';

const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleStart = (e) => {
    e.preventDefault();
    dispatch(getAllVideogames());
    dispatch(getAllGenres());
    dispatch(getAllPlatforms())
    navigate("/home");
  };
  return (
    <div className={style['landing-container']}>
      <div className={style['landing-back']}>
        <div className={style["landing-p"]}>
          <p>Welcome to our gaming paradise!</p>
          <p> Explore a world of epic adventures, immersive gameplay, and endless fun. </p>
          <p>Discover a vast collection of games, search by genre and rating, and find the perfect match for your gaming preferences. </p>
          <p>Dive into detailed game profiles, unleash your creativity as a game creator, and connect with fellow gamers in our vibrant community. Level up your gaming adventure today!</p>
          <input type="button" className={style['button']} value="Enjoy!" onClick={(e)=>handleStart(e)}/>
        </div>
      </div>
    </div>
  )
}

export default Landing