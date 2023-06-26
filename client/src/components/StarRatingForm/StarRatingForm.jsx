import React, { useState } from 'react';
import star from '../../image/icons/star.png';
import starEmpty from '../../image/icons/starEmpty.png';
import style from './StarRatingForm.module.css';

const StarRatingForm = ({ rating, setRating, handleChangeForm }) => {
  const [clickedStar, setClickedStar] = useState(rating);
  // El estado local tiene como valor inicial el rating que recibe por props desde el formulario
  const handleStarClick = (selectedRating) => {
    const newRating = selectedRating === rating ? 0 : selectedRating;
    setRating(newRating);
    setClickedStar(newRating);
    handleChangeForm({
      target: { name: 'rating', value: newRating, type: 'number' },
    });
  };
  // En un array del 1 al 5, le realizo un map, donde por cada valor, reenderizo una imagen, donde su  key sea el valor(1,2,3,4,5)
  // donde el recurso, si el valor es igual o mayor al valor del estado local, su imagen sera star y si no lo es, será starempty
  // onclick recibe el evento y cuando se dispara dicho evento, le pasa a handleStarClick, el valor y el evento
  // En handleStarRating, le paso el valor y lo llamo selectedRating para más especificidad
  // En la variable const newRating, guardo el valor 0 o selectRating dependiendo si el valor es igual al rating que nos pasan por props
  // Establezco el valor de rating, mediante setRating, con el valor guardado en newRating
  // Establezco el valor del estado local clickedStar mediante setClickedStar
  // Esta línea llama a la función handleChangeForm pasándole un objeto que simula un evento. Dentro del objeto, se encuentra una propiedad target que contiene la información del evento. Aquí se establece name como "rating" para indicar que se está cambiando la calificación. El value se establece en newRating, lo que representa la nueva calificación seleccionada. Además, el type se establece en 'number' para indicar el tipo de valor.
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
            className={`${style.star} ${clickedStar >= value ? style.clicked : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRatingForm;