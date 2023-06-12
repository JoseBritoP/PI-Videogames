import React from 'react'
import Cards from '../../components/Cards/Cards'
import Aside from '../../components/Aside/Aside'
import style from './Home.module.css'
const Home = () => {
  return (
    <div className={style['home']}>
      <Aside/>
      <Cards/>
    </div>
  )
}

export default Home