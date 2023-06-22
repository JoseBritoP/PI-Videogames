import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards/Cards'
import Aside from '../../components/Aside/Aside'
import style from './Home.module.css'
import Pagination from '../../components/Pagination/Pagination'
import { useSelector} from 'react-redux';

const Home = (props) => {

  const { currentPage, setCurrentPage, resetPagination } = props; //* Recibimos el state por props para el páginado

  const videogames = useSelector((state) => state.videogames);  //* Suscribimos el componente a redux con el hook useSelector

  const VIDEOGAMES_PER_PAGE = 15; //* Establezco el límite de cartas por página
  
  const [items, setItems] = useState([]); //* Creo un useState de los items = cards de videogames

  //! Aquí establezco la cantidad de páginas según la cantidad de elementos/items/videogames 
  const totalPages = Math.ceil(videogames.length / VIDEOGAMES_PER_PAGE);

  //* Cuando el componente se monta, hago que la página se establezca en 1 y dependerá de la función setCurrentPage
  useEffect(() => {
    setCurrentPage(1);
  }, [setCurrentPage]);

  //* en este useEffect, 
  useEffect(() => {
    const firstIndex = (currentPage - 1) * VIDEOGAMES_PER_PAGE; //Indice del primer elemento del array -> (1-1) * 15 -> 0 
    const lastIndex = firstIndex + VIDEOGAMES_PER_PAGE; // Indice del ultimo elemento 0 + 15 -> 15
    const slicedItems = videogames.slice(firstIndex, lastIndex);
    setItems(slicedItems);
  }, [currentPage, VIDEOGAMES_PER_PAGE, videogames]);

  return (
    <div className={style['home-container']}>
      <div className={style['home']}>
        <Aside videogames={items} resetPagination={resetPagination}/>
        <div>
          <Cards videogames={items}/>
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
        </div>
      </div>
    </div>
  )
}

export default Home;