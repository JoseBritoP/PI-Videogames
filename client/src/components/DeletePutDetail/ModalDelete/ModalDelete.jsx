import React from 'react'
import style from './ModalDelete.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteVideogame } from '../../../redux/actions'

const ModalDelete = ({setModalDEL,id}) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cancelDelete = () => {
    setModalDEL(false);
  };

  const aceptDelete = () => {
    setModalDEL(false);
    dispatch(deleteVideogame(id));
    navigate('/home');
  };

  return (
    <div className={style['modal']} id='modalDelete'>
      <h1>Are you sure to delete this videogamecard?</h1>
      <div className={style['modal-confirmation']}>
        <button onClick={aceptDelete}>YES</button>
        <button onClick={cancelDelete}>NO</button>
      </div>
    </div>
  )
}

export default ModalDelete