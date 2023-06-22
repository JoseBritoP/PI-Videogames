import React from 'react'
import style from './AsideOrigin.module.css'
import { useDispatch } from 'react-redux';
import { filterCreated } from '../../../redux/actions';
import useAsideSetters from '../../../hooks/useAsideSetters';

const AsideOrigin = ({resetPagination}) => {
  const dispatch = useDispatch();

  const {setOriginInput,resetAsideState} = useAsideSetters()

  
  const handleCreatedApiChange = (event) => {
    const value = event.target.value;
    setOriginInput(value);
    if (value !== "All") {
      resetPagination();
      resetAsideState()
    };
    dispatch(filterCreated(value));
  };

  return (
    <div className={style['aside-origin']}>
    <p>Origin</p>
    <select name="" id="" onChange={handleCreatedApiChange}>
      <option value="All">---</option>
      <option value="All">Both</option>
      <option value="api">In API</option>
      <option value="created">In BDD</option>
      <option value="clear">Clear</option>
      <option value="workApi">API</option>
      <option value="workBdd">CREATED</option>
    </select>
  </div>
  )
}

export default AsideOrigin