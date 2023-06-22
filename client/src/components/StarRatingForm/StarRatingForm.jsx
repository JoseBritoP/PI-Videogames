import React, { useState } from 'react';
import star from '../../image/icons/star.png';
import starEmpty from '../../image/icons/starEmpty.png';
import style from './StarRatingForm.module.css';

const StarRatingForm = ({ rating, setRating, handleChangeForm }) => {
  const [clickedStar, setClickedStar] = useState(rating);

  const handleStarClick = (selectedRating) => {
    const newRating = selectedRating === rating ? 0 : selectedRating;
    setRating(newRating);
    setClickedStar(newRating);
    handleChangeForm({
      target: { name: 'rating', value: newRating, type: 'number' },
    });
  };

  return (
    <div>
      <label htmlFor="rating">Rating</label>
      <div className={style['stars-container']}>
        {[1, 2, 3, 4, 5].map((value) => (
          <img
            key={value}
            src={value <= clickedStar ? star : starEmpty}
            alt={`Star ${value}`}
            onClick={(event) => handleStarClick(value,event)}
            className={`${style.star} ${
              clickedStar >= value ? style.clicked : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRatingForm;