import {GET_ALL_VIDEOGAMES,CLEAN_VIDEOGAMES, GET_VIDEOGAME_DETAIL, CLEAN_VIDEOGAME_DETAIL, GET_ALL_GENRES, GET_ALL_PLATFORMS, GET_VIDEOGAMES_BY_NAME,ORDER,FILTERED_BY_GENRES,FILTER_CREATED,FILTER_BY_RELEASED} from './actions-types'
import axios from 'axios';

export const getAllVideogames = () => {
  return async function(dispatch){
    try {
      const videogamesApi = await axios.get('http://localhost:3001/videogames')
      const videogames = videogamesApi.data;
      dispatch({type: GET_ALL_VIDEOGAMES, payload: videogames})
    } catch (error) {
        alert(`${error.response.data.error}`)
    }
  }
};

export const getVideogamesBySearch = (query) => {
  return async function(dispatch){
    try {
      const videogamesApi = await axios.get(`http://localhost:3001/videogames?name=${query}`)
      const videogamesByName = videogamesApi.data
      dispatch({type:GET_VIDEOGAMES_BY_NAME,payload:videogamesByName})
    } catch (error) {
      // console.log(error.response.status)
      // console.log(error.response.data)
      // console.log(error.response.data.error)
      alert(`${error.response.data.error}`)
    }
  }
};

export const clearVideogames = () => {
  return {type: CLEAN_VIDEOGAMES}
};

export const getVideogameDetail = (id) => {
  return async function (dispatch){
    try {
      const videogameByIdInfo = await axios.get(`http://localhost:3001/videogames/${id}`)
      const videogame = videogameByIdInfo.data
      dispatch({type:GET_VIDEOGAME_DETAIL,payload: videogame})
    } catch (error) {
      // console.log(error.response)
      // alert(`No se encontró un videojuego de id: ${id}`)
      alert(`${error.response.data.error}`)
    }
  }
};

export const cleanVideogameDetail = () =>{
  return {type: CLEAN_VIDEOGAME_DETAIL}
};

export const getAllGenres = () => {
  return async function(dispatch){
    try {
      const genresInfo = await axios.get(`http://localhost:3001/genres`)
      const genres = genresInfo.data;
      dispatch({type: GET_ALL_GENRES,payload:genres})
    } catch (error) {
      alert(`${error.response.data.error}`)      
    }
  }
};

export const getAllPlatforms = () => {
  return async function (dispatch) {
    try {
      const platformsInfo = await axios.get('http://localhost:3001/platforms')
      const platforms = platformsInfo.data;
      dispatch({type: GET_ALL_PLATFORMS, payload: platforms})
    } catch (error) {
      alert(`${error.response.data.error}`)      
    }
  }
};

export const postVideogame = (form) => {
  return async function (dispatch){
    try {
      console.log(form)
      const response= await axios.post(`http://localhost:3001/videogames`,form)
      // eslint-disable-next-line
      const newVideogame = response.data; //La info del nuevo videojuego
      // Llamar a mi backend para obtener todos los juegos
      axios.get(`http://localhost:3001/videogames`)
      .then((response)=>{
        const updatedVideogames = response.data;

        // Dispatch de getAllVideogames
        dispatch(getAllVideogames(updatedVideogames))
      })
      alert(`Your videogamecard has been created successfully`)
    } catch (error) {
      // alert('hubo un error')
      alert(`${error.response.data.error}`)
    }
  }
};

  export const orderBy = (order)=>{
    return function(dispatch){
      return dispatch({type:ORDER,payload:order})
    }
  }

  export const filteredVideogamesByGenre = (genre) => {
    return function(dispatch){
      return dispatch({type:FILTERED_BY_GENRES,payload:genre})
    }
  }

  export const filterCreated = (value) =>{
    return {
      type:FILTER_CREATED ,payload:value}
  };

  export const filterByDate = (date) => {
    return {type: FILTER_BY_RELEASED, payload: date}
  };