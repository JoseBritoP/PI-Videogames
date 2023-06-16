import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './Detail.module.css'
import star from '../../image/icons/star.png'
import Spinner from '../../components/Spinner/Spinner'
// Dependencias:
import { useSelector, useDispatch } from 'react-redux'
import { getVideogameDetail} from '../../redux/actions'
import { CLEAN_VIDEOGAME_DETAIL } from '../../redux/actions-types'
const Detail = () => {
  // Necesitamos el id para llamar a la action:
  const { id } = useParams();
  // La necesitamos para la redirección de nuestra página web
  const navigate = useNavigate();
  // Dispatch
  const dispatch = useDispatch()
  // Necesitamos acceder al estado global / Hacer que el componente se suscriba con useSelector || mapStateToProps
  
  const videoGameDetail = useSelector((state)=> state.videogameDetail)
  // Cuando el componente se monte, hará el dispatch para obtener el detalle del videojuego en cuestión - componentDidMount - useEffect
  // Cuando el componente se desmonte, lo limpiamos para que no quede como un caché - componenteDidUnmount - return en UseEffect y la action type

  useEffect(()=>{
    dispatch(getVideogameDetail(id))
    return ()=>{
      dispatch({type:CLEAN_VIDEOGAME_DETAIL})
    }
  },[id,dispatch]);

  const backToHome = ()=>{
    navigate('/home');
  }

  return (
    <div className={style['card-container']}>
    {videoGameDetail.name ? (
      <div className={style['card']}>
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
    ) : (
      // <h2>Cargando...</h2>
      <Spinner/>
    )}
    <div className={style['card-bottonHome']}>
      <button onClick={backToHome}>Home</button>
    </div>
  </div>
  );
};

export default Detail