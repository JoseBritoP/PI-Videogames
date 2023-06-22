import React from 'react'
import style from './AsideOrder.module.css';
import { useDispatch } from 'react-redux';
import { orderBy } from '../../../redux/actions';
import useAsideSetters from '../../../hooks/useAsideSetters';

const AsideOrder = () => {

  const dispatch = useDispatch();

  const {alpOrder,setAlpOrder,ratingOrder,setRatingOrder} = useAsideSetters()
  
  const handleAlpChange = (event) => {
    const value = event.target.value;
    setAlpOrder(value);
    if (value !== '---') {
      setRatingOrder(0);
    }
    dispatch(orderBy(value));
    // console.log("Alp: " + value);
  };

  const handleRatingChange = (event) => {
    const value = event.target.value;
    setRatingOrder(value);
    if (value !== "---") {
      setAlpOrder('---');
    }
    dispatch(orderBy(value));
    // console.log("Rating: " + value);
  };
  
  return (
    <div className={style['aside-order']}>
          <h1>Order By:</h1>
          <p>Alp</p>
          <select value={alpOrder} onChange={handleAlpChange}>
            <option value="---">---</option>
            <option value="asc">ASC</option>
            <option value="dct">DESC</option>
          </select>
          <p>Rating</p>
          <select value={ratingOrder} onChange={handleRatingChange}>
            <option value="---">---</option>
            <option value="top">5-0</option>
            <option value="low">0-5</option>
          </select>
        </div>
  )
}

export default AsideOrder