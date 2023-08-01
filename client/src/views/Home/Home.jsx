import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import Aside from '../../components/Aside/Aside';
import style from './Home.module.css';
import Pagination from '../../components/Pagination/Pagination';
import { useSelector} from 'react-redux';
import { useLocation } from 'react-router-dom';
// import ModalDeleteConfirmation from '../../components/DeletePutDetail/ModalDelete/ModalDeleteConfirmation/ModalDeleteConfirmation';
// import ModalPutConfirmation from '../../components/DeletePutDetail/ModalPut/ModalPutConfirmation/ModalPutConfirmation';
// import ModalCreateConfirmation from '../../components/ModalForm/ModalCreateConfirmation/ModalCreateConfirmation';
// import useModalConfirmation from '../../hooks/useModalConfirmation';

const Home = (props) => {

  // const { modalDeleteCon, modalPutCon, modalCreateCon, setFalseState } = useModalConfirmation();

  const location = useLocation();

  const { currentPage, setCurrentPage, resetPagination } = props; //* Recibimos el state por props para el páginado

  const videogames = useSelector((state) => state.videogames);  //* Suscribimos el componente a redux con el hook useSelector

  const VIDEOGAMES_PER_PAGE = 15; //* Establezco el límite de cartas por página
  
  const [items, setItems] = useState([]); //* Creo un useState de los items = cards de videogames

  //! Aquí establezco la cantidad de páginas según la cantidad de elementos/items/videogames 
  const totalPages = Math.ceil(videogames.length / VIDEOGAMES_PER_PAGE);

  //*
  useEffect(() => {
    const firstIndex = (currentPage - 1) * VIDEOGAMES_PER_PAGE; //Indice del primer elemento del array -> (1-1) * 15 -> 0 
    const lastIndex = firstIndex + VIDEOGAMES_PER_PAGE; // Indice del ultimo elemento 0 + 15 -> 15
    const slicedItems = videogames.slice(firstIndex, lastIndex);
    setItems(slicedItems);
  }, [currentPage, VIDEOGAMES_PER_PAGE, videogames]);

  // useEffect(() => {
  //   if (modalDeleteCon || modalPutCon || modalCreateCon) {
  //     // Llamar a setFalseState después de 1500 milisegundos
  //     const timeout = setTimeout(() => {
  //       setFalseState();
  //     }, 1500);

  //     // Limpiar el timeout al desmontar el componente o cuando los estados de los modales cambien
  //     return () => clearTimeout(timeout);
  //   }
  // }, [modalDeleteCon, modalPutCon, modalCreateCon, setFalseState]);

  return (
    <div className={`page-transition ${location.pathname !== '/' ? 'page-enter' : ''}`}>
      <div className={style['home-container']}>
        <div className={style['home']}>
          <Aside videogames={items} resetPagination={resetPagination}/>
          <div>
            {/* {modalDeleteCon && <ModalDeleteConfirmation/>}
            {modalPutCon && <ModalPutConfirmation/>}
            {modalCreateCon && <ModalCreateConfirmation/>} */}
            <Cards videogames={items}/>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;