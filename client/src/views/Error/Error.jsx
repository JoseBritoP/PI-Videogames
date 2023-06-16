import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Error.module.css'

const Error = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Error 404: Página no encontrada</h1>
      <div className={styles['text-container']}>
       <p className={styles.text}> Lo sentimos, la página que estás buscando no existe.</p>
       <p className={styles.link}><Link to="/home" style={{textDecoration:"none"}}>Volver a Home</Link></p>
      </div>
    </div>
  )
}

export default Error