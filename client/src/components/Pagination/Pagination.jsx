import React from 'react'
import style from './Pagination.module.css'
const Pagination = (props) => {
  
  const {currentPage,setCurrentPage,totalPages} = props;
  
  //* Limitar la cantidad de botones
  const max_Buttons = 5;
  const startPage = Math.max(1,currentPage - Math.floor(max_Buttons/2));
  //currentPage  = 6
  // Queremos mostrar 5 botones por páginación
  // Math.floor(5/2) -> 2
  // Math.max(1, 6 - 2);
  // Math.max(1,4) -> 4
  // startPage = 4
 
  const endPage = Math.min(startPage + max_Buttons - 1, totalPages)

  // Math.min(4 + 5 - 1, 7);
  // (4+5-1, 7)
  // 4+4,7 
  // 7

  const nextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) return;
    setCurrentPage(nextPage);
  };
  
  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };
  const prevPage = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 1) return;
    setCurrentPage(prevPage);
  };
  
  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const pages =[];
  for (let pageNumber = startPage; pageNumber <= endPage; pageNumber++) {
    pages.push(
      <button key={pageNumber} onClick={() => setCurrentPage(pageNumber)} className={currentPage === pageNumber ? style['active'] : ''}> 
        {pageNumber}
      </button>
    );
  }
  return (
    <div className={style['pagination-container']}>
      <button onClick={goToFirstPage} disabled={currentPage === 1}>
        {"<<"}
      </button>
      <button onClick={prevPage} disabled={currentPage === 1}>
        {"<"}
      </button>
      {pages}
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        {">"}
      </button>
      <button onClick={goToLastPage} disabled={currentPage === totalPages}>
        {">>"}
      </button>
    </div>
  );
}

export default Pagination









