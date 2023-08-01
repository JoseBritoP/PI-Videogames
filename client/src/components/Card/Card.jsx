import React from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'
import star from '../../image/icons/star.png'
const Card = (props) => {
  const {id,name,image,genres,rating,released} = props;
  return (
    <div className={style['card']}>

      <div className={style['card-title-container']}>
        <Link to={`/detail/${id}`} style={{textDecoration:"none"}}>
          <h1 className={style['card-title']}>{name}</h1>
        </Link>
      </div>
      <div className={style['card-image']}>
        <img src={image} alt={name} />
      </div>
      <div className={style['card-content']}>
        <h2 className={style['card-subtitle']}>Genres</h2>
        <div className={style['card-elements']}>
          {genres && genres.map((genre, index) => <p key={index}>{genre}</p>)}
        </div>
      </div>
      <div className={style['card-rating-released']}>
        <p>Rating: <span>{rating}</span><img src={star} alt='star' /></p>
        <p>Released: <span>{released}</span></p>
      </div>

    </div>
  )
}

export default Card