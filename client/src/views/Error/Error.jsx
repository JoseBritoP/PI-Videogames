import React from 'react'
import styles from './Error.module.css'
import { getAllVideogames } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const backToHome = (event) =>{
    event.preventDefault();
    navigate('/home');
    dispatch(getAllVideogames());
  }
  return (
  <div className={`page-transition ${location.pathname !== '/' ? 'page-enter' : ''}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>Error 404: Página no encontrada</h1>
        <div className={styles['text-container']}>
        <p className={styles.text}> Lo sentimos, la página que estás buscando no existe.</p>
        <button onClick={(e)=>{backToHome(e)}}> Home </button>
        </div>
      </div>
  </div>
  )
}

export default Error