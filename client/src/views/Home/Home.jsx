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
  //* Recibimos el state por props para el páginado
  const { currentPage, setCurrentPage } = props;
  // const dispatch = useDispatch();

  //* Suscribimos el componente a redux con el hook useSelector
  const videogames = useSelector((state) => state.videogames);
  const videogamesBySearch = useSelector((state) => state.videoGamesBySearch);

  //* Establezco el límite de cartas por página
  const ITEMS_PER_PAGE = 15;
  //* Creo un useState de los items = cards de videogames
  const [items, setItems] = useState([]);

  //* Aquí establezco la cantidad de páginas según la cantidad de elementos/items/videogames 
  const totalVideogames = videogamesBySearch.length === 0 ? videogames : videogamesBySearch;
  const totalPages = Math.ceil(totalVideogames.length / ITEMS_PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  //* Cuando el componente se monta, hago que la página se establezca en 1 y dependerá de la función setCurrentPage y de videogamesBySearch
  useEffect(() => {
    setCurrentPage(1);
  }, [setCurrentPage,videogamesBySearch]); // Reset currentPage when the search results change


  //* en este useEffect, 
  useEffect(() => {
    const firstIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const lastIndex = firstIndex + ITEMS_PER_PAGE;
    const slicedItems = totalVideogames.slice(firstIndex, lastIndex);
    setItems(slicedItems);
  }, [currentPage, ITEMS_PER_PAGE, totalVideogames, videogamesBySearch,videogames]);

  return (
    <div className={style['home-container']}>
      <div className={style['home']}>
        <Aside videogames={items}/>
        <div>
          {videogamesBySearch.length === 0 ? (
            <Cards videogames={items}/>
            ) : (
              <Cards videogames={videogamesBySearch}/>
          )}
          <div className={style['home-button']}>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} pageNumbers={pageNumbers}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home