import React, { useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// Dependencias:
// import { useSelector, useDispatch } from 'react-redux'
// import { getVideogameDetail} from '../../redux/actions'
// import { CLEAN_VIDEOGAME_DETAIL } from '../../redux/actions-types'
import style from './Detail.module.css'
import star from '../../image/icons/star.png'
import Spinner from '../../components/Spinner/Spinner'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useVideogameDetail from '../../hooks/useVideogameDetail';
import DeletePutDetail from '../../components/DeletePutDetail/DeletePutDetail';
const Detail = () => {

  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const videoGameDetail = useVideogameDetail();
  
  const backToHome = ()=>{
    navigate('/home');
  }

  return (
    <div className={`page-transition ${location.pathname !== '/' ? 'page-enter' : ''}`}>
      <div className={style['card-container']}>
        {videoGameDetail.name ? (
          <div className={style['card']}>
            {isNaN(id) ?
              <DeletePutDetail id = {id}/>
             : ""}
            <div className={style['card-title-container']}>
              <h1 className={style['card-title']}>{videoGameDetail.name}</h1>
            </div>
            <div className={style['card-image']}>
              <img src={videoGameDetail.background_image} alt={videoGameDetail.name}/>
            </div>
            
            <div className={style["genres-platforms-container"]}>
              <div className={style["card-content"]}>
                <h2 className={style['card-subtitle']}>Genres</h2>
                <div className={style['card-elements']}>
                  {videoGameDetail.genres.map((genre,index) => (<p key={index}>{genre.name}</p>))}
                </div>
              </div>
              <div className={style["card-content"]}>
                <h2 className={style['card-subtitle']}> Platforms</h2>
                <div className={style['card-elements']}>
                  {videoGameDetail.platforms.map((platform,index) => (<p key={index}>{platform.name}</p>))}
                </div>
              </div>
            </div>
            <div className={style['card-description']}>
              <h2 className={style['card-subtitle']}> Description</h2>
              <p> {videoGameDetail.description}</p>
            </div>
            <div className={style['card-rating-released']}>
              <p>Rating:  <span>{videoGameDetail.rating} </span>
              <img src={star} alt='star'/>
              </p>
              <p>Released:  <span>{videoGameDetail.released}</span></p>
            </div>
          </div>
          ) : (<Spinner/>)
        }
      <div className={style['card-bottonHome']}>
        <button onClick={backToHome}>Home</button>
      </div>
    </div>
  </div>
  );
};

export default Detail