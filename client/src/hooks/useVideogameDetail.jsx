import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { getVideogameDetail } from "../redux/actions";
import { cleanVideogameDetail } from "../redux/actions";
const useVideogameDetail = () => {
    // Necesitamos el id para llamar a la action:
    const { id } = useParams();
 
    // Dispatch
    const dispatch = useDispatch()
    // Necesitamos acceder al estado global / Hacer que el componente se suscriba con useSelector || mapStateToProps
    
    const videoGameDetail = useSelector((state)=> state.videogameDetail)
    // Cuando el componente se monte, hará el dispatch para obtener el detalle del videojuego en cuestión - componentDidMount - useEffect
    // Cuando el componente se desmonte, lo limpiamos para que no quede como un caché - componenteDidUnmount - return en UseEffect y la action type
  
    useEffect(()=>{
      dispatch(getVideogameDetail(id))
      return ()=>{
        dispatch(cleanVideogameDetail())
      }
    },[id,dispatch]);


  return videoGameDetail;
};

export default useVideogameDetail;