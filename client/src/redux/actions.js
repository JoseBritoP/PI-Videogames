import {GET_ALL_VIDEOGAMES, GET_VIDEOGAME_DETAIL, CLEAN_VIDEOGAME_DETAIL, GET_ALL_GENRES, GET_ALL_PLATFORMS, VIDEOGAMES_GENRES_FILTERED, VIDEOGAMES_PLATFORMS_FILTERED, VIDEOGAMES_ASC, VIDEOGAMES_DESC} from './actions-types'
import axios from 'axios';

export const getAllVideogames = () => {
  return async function(dispatch){
    const videogamesApi = await axios.get('http://localhost:3001/videogames')
    const videogames = videogamesApi.data;
    dispatch({type: GET_ALL_VIDEOGAMES, payload: videogames})
  }
};

export const getVideogameDetail = (id) => {
  return async function (dispatch){
    try {
      const videogameByIdInfo = await axios.get(`http://localhost:3001/${id}`)
      const videogame = videogameByIdInfo.data
      dispatch({type:GET_VIDEOGAME_DETAIL,payload: videogame})
    } catch (error) {
      console.log(error.message)
    }
  }
};

export const cleanVideogameDetail = () =>{
  return {type: CLEAN_VIDEOGAME_DETAIL}
};

export const getAllGenres = () => {
  return async function(dispatch){
    const genresInfo = await axios.get(`http://localhost:3001/genres`)
    const genres = genresInfo.data;
    dispatch({type: GET_ALL_GENRES,payload:genres})
  }
};

export const getAllPlatforms = () => {
  return async function (dispatch) {
    const platformsInfo = await axios.get('http://localhost:3001/platforms')
    const platforms = platformsInfo.data;
    dispatch({type: GET_ALL_PLATFORMS, payload: platforms})
  }
};

