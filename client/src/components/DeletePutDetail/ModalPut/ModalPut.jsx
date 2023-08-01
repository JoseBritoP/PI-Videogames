import React,{useState} from 'react';
import style from './ModalPut.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FormPut from './ModalPutConfirmation/FormPut/FormPut';

const ModalPut = ({setModalPUT}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const cancelDelete = () => {
    setModalPUT(false);
  };

  const aceptDelete = () => {
    setModalPUT(false);
    navigate('/home');
  };
  return (
    <div className={style['modal']} id='modalDelete'>
     <FormPut/>

      <div className={style['modal-confirmation']}>
        <button onClick={aceptDelete}>Save</button>
        <button onClick={cancelDelete}> X </button>
      </div>
  </div>
  )
}

export default ModalPut