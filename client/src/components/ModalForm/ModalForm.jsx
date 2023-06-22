import React from 'react'
import style from './ModalForm.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllVideogames } from '../../redux/actions'
const ModalForm = ({setModal}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = () => {
    setModal(false);
    navigate('/home');
    dispatch(getAllVideogames());
  }
  return (
    <div className={style['modal']}>
      <div className={style['modal-div']}>
        <h2>YOUR VIDEOGAME CARD WAS SUCCESSFULLY CREATED!</h2>
        <button onClick={handleClick}>Continue</button>
      </div>
    </div>
  )
}

export default ModalForm

