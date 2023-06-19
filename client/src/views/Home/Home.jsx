import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards/Cards'
import Aside from '../../components/Aside/Aside'
import style from './Home.module.css'
import Pagination from '../../components/Pagination/Pagination'
// import { useDispatch } from 'react-redux';
// import { getAllVideogames } from '../../redux/actions';
import { /*useDispatch*/ useSelector } from 'react-redux';
// import { getAllVideogames } from '../../redux/actions';

const Home = (props) => {

  const { currentPage, setCurrentPage } = props; //* Recibimos el state por props para el páginado

  const videogamesState = useSelector((state) => state.videogames);  //* Suscribimos el componente a redux con el hook useSelector
  const videogamesBySearch = useSelector((state) => state.videoGamesBySearch);  //* Suscribimos el componente a redux con el hook useSelector

  const ITEMS_PER_PAGE = 15; //* Establezco el límite de cartas por página
  //* Creo un useState de los items = cards de videogames
  const [items, setItems] = useState([]);

  const videoGames = videogamesBySearch.length === 0 ? videogamesState : videogamesBySearch; //* videoGames tiene un valor condicional, es el videogamesState si videogamesBySearch no tiene longitud
  
  //! Aquí establezco la cantidad de páginas según la cantidad de elementos/items/videogames 
  const totalPages = Math.ceil(videoGames.length / ITEMS_PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  //* Cuando el componente se monta, hago que la página se establezca en 1 y dependerá de la función setCurrentPage y de videogamesBySearch
  useEffect(() => {
    setCurrentPage(1);
  }, [setCurrentPage,videogamesBySearch]); //* Pongo como valor 1 a currentPage cuando videogamesBySearch cambie


  //* en este useEffect, 
  useEffect(() => {
    const firstIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const lastIndex = firstIndex + ITEMS_PER_PAGE;
    const slicedItems = videoGames.slice(firstIndex, lastIndex);
    setItems(slicedItems);
  }, [currentPage, ITEMS_PER_PAGE, videoGames]);

  return (
    <div className={style['home-container']}>

      <div className={style['home']}>

        <Aside videogames={items}/>

        <div>
          <Cards videogames={items}/>
          <div className={style['home-button']}>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} pageNumbers={pageNumbers}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home