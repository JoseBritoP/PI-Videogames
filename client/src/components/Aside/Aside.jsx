import React from 'react'
import style from './Aside.module.css';
import {AsideFilter,AsideOrder} from '../AsideSubComponents/index';

const Aside = (props) => {
  const {resetPagination} = props;

  return (
    <div className={style['aside-container']}>
      <div className={style['fixed']}>

        <AsideOrder/>

        <AsideFilter resetPagination={resetPagination}/>

        {/* <AsideOrigin/> */}
        <div className={style['message']}>
        <p>WARNING! <br/> <span>ORIGIN: 
          <br/>The values: {"(Both - InApi - InBdd)"} is used for a more specific search after filtering by genre.<br/>
          And the values: {"(Clear API CREATED)"} is where filters and sorting will be applied.<br/>
          ENJOY!</span></p>
        </div>
      </div>
    </div>
  )
}

export default Aside