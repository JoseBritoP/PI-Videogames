import React,{useState} from 'react';
import style from './ModalPut.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useVideogameDetail from '../../../hooks/useVideogameDetail';

const ModalPut = ({setModalPUT}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const videogameInfo = useVideogameDetail();

  const [videogame,setVideogame] = useState({
    name:`${videogameInfo.name}`,
    background_image:`${videogameInfo.background_image}`,
    platforms: [...videogameInfo.platforms],
    genres: [...videogameInfo.genres],
    rating: videogameInfo.rating,
    released: `${videogameInfo.released}`,
    description: `${videogameInfo.description}`
  })

 
  const cancelDelete = () => {
    setModalPUT(false);
  };

  const aceptDelete = () => {
    setModalPUT(false);
    // dispatch(deleteVideogame(id))
    navigate('/home');
  };
  return (
    <div className={style['modal']} id='modalDelete'>
      <h1>Update the info in your videogamecard!</h1>

      <div>
        <label htmlFor="">Name</label>
        <input type="text" name="" id="" value={videogame.name} />
      </div>
      <div>
        <label htmlFor="">Image</label>
        <input type="text" name="" id="" value={videogame.background_image}/>
      </div>
      <div>
        <label htmlFor="">Genres</label>
        <select name="" id="">
        </select>
          
      </div>

      <div className={style['modal-confirmation']}>
        <button onClick={aceptDelete}>Save</button>
        <button onClick={cancelDelete}> X </button>
      </div>
  </div>
  )
}

export default ModalPut