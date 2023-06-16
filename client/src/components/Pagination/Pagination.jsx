import React from 'react'
import style from './Pagination.module.css'
const Pagination = (props) => {
  
  const {currentPage,setCurrentPage,totalPages,pageNumbers} = props;

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

  return (
    <div className={style['pagination-container']}>
      <button onClick={goToFirstPage} disabled={currentPage === 1}> {"<<"}</button>
      <button onClick={prevPage} disabled={currentPage === 1}>{"<"}</button>
        {pageNumbers.map((pageNumber) => (
          <button key={pageNumber} onClick={() => setCurrentPage(pageNumber)} className={currentPage === pageNumber ? style['active'] : ''}>
            {pageNumber}
          </button>
        ))}
      <button onClick={nextPage} disabled={currentPage === totalPages}>{">"}</button>
      <button onClick={goToLastPage} disabled={currentPage === totalPages}> {">>"}</button>
    </div>
  )
}

export default Pagination