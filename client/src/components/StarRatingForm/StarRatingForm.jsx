import React, { useState } from 'react';
import star from '../../image/icons/star.png';
import starEmpty from '../../image/icons/starEmpty.png';
// import starlight from '../../image/icons/starlight.png';
import style from './StarRatingForm.module.css'; // Importa el archivo CSS para el componente

const StarRatingForm = () => {
  const [rating, setRating] = useState(1);
  const [clickedStar, setClickedStar] = useState(null);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    setClickedStar(selectedRating);

    // Reinicia el estado 'clickedStar' después de 1 segundo para detener la animación
    setTimeout(() => {
      setClickedStar(null);
    }, 1000);
  };

  return (
    <div>
      <label htmlFor="rating">Rating</label>
      <div className={style['stars-container']}>
        {[1, 2, 3, 4, 5].map((value) => (
          <img
            key={value}
            src={value <= rating ? star : starEmpty}
            alt={`Star ${value}`}
            onClick={() => handleStarClick(value)}
            className={`${style.star} ${clickedStar === value ? style.clicked : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRatingForm;
