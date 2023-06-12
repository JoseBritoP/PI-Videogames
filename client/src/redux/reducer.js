// Actions-types:
import {GET_ALL_VIDEOGAMES, GET_VIDEOGAME_DETAIL, CLEAN_VIDEOGAME_DETAIL, GET_ALL_GENRES, GET_ALL_PLATFORMS, VIDEOGAMES_GENRES_FILTERED, VIDEOGAMES_PLATFORMS_FILTERED, VIDEOGAMES_ASC, VIDEOGAMES_DESC} from './actions-types'

// state:

const initialState = {
  videogames: [],
  videogameDetail: {},
  cleanDetail: {},
  getAllGenres: [],
  genresFiltered: [],
  getAllPlatforms: [],
  platformsFiltered: [],
  videogamesASC: [],
  videogamesDESC: []
}

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_ALL_VIDEOGAMES: return {...state,videogames: action.payload};
    case GET_VIDEOGAME_DETAIL: return {...state,videogameDetail: action.payload};
    case CLEAN_VIDEOGAME_DETAIL: return {...state,videogameDetail:{...initialState.cleanDetail}};
    case GET_ALL_GENRES: return {...state,getAllGenres: action.payload};
    case GET_ALL_PLATFORMS: return {...state,getAllPlatforms: action.payload};
    default: return {...state}
  }
};

export default rootReducer