// Actions-types:
import {GET_ALL_VIDEOGAMES, CLEAN_VIDEOGAMES,GET_VIDEOGAME_DETAIL, CLEAN_VIDEOGAME_DETAIL, GET_ALL_GENRES, GET_ALL_PLATFORMS, GET_VIDEOGAMES_BY_NAME,ORDER, FILTERED_BY_GENRES,FILTER_CREATED} from './actions-types'

// state:

const initialState = {
  videogames: [],
  videogamesAux: [],
  videogameDetail: {},
  getAllGenres: [],
  getAllPlatforms: [],
}

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    //! AllVideogames
    case GET_ALL_VIDEOGAMES: return {...state,
      videogames: action.payload,
      videogamesAux: action.payload
    };
    //! VideogamesQuery
    case GET_VIDEOGAMES_BY_NAME: return {...state,videogames: action.payload,videogamesAux: action.payload};
    case CLEAN_VIDEOGAMES: return {...state,videogames: [],videogamesAux:[]};
    //! VideogameById
    case GET_VIDEOGAME_DETAIL: return {...state,videogameDetail: action.payload};
    case CLEAN_VIDEOGAME_DETAIL: return {...state,videogameDetail:{}};
    //! getAllGenres
    case GET_ALL_GENRES: return {...state,getAllGenres: action.payload};
    //! getAllPlatforms
    case GET_ALL_PLATFORMS: return {...state,getAllPlatforms: action.payload};
    //! Filter created / Api 
    case FILTER_CREATED: 

      const crit = action.payload;

      const videogames = [...state.videogamesAux];
      const createdFilter = crit === "created" ? videogames.filter((game) => game.created === true) : videogames.filter((game) => game.created === false);
    
      return {...state,videogames: crit === "All" ? videogames : createdFilter};
    //! Order 
    case ORDER:
      const orderType = action.payload;
      const videogamesNotOrder =  [...state.videogamesAux]; //Ayuda
      let orderedVideogames = [...state.videogames]

      if (orderType === "asc") {
        orderedVideogames.sort((prevGame, nextGame) => {
          if (prevGame.name < nextGame.name) return -1;
          if (prevGame.name > nextGame.name) return 1;
          return 0;
        });
      } else if (orderType === "dct") {
        orderedVideogames.sort((prevGame, nextGame) => {
          if (prevGame.name < nextGame.name) return 1;
          if (prevGame.name > nextGame.name) return -1;
          return 0;
        });
      } else if (orderType === "low") {
        orderedVideogames.sort((prevGame, nextGame) => {
          if (prevGame.rating < nextGame.rating) return -1;
          if (prevGame.rating > nextGame.rating) return 1;
          return 0;
        });
      } else if (orderType === "top") {
        orderedVideogames.sort((prevGame, nextGame) => {
          if (prevGame.rating < nextGame.rating) return 1;
          if (prevGame.rating > nextGame.rating) return -1;
          return 0;
        });
      } 
      return{...state, videogames: orderType === "---" || orderType === 0 ? videogamesNotOrder : orderedVideogames};
    //! FilterByGenre
    case FILTERED_BY_GENRES:

      const genreType = action.payload;
    
      const videogamesPure =  [...state.videogamesAux];;
      const filteredVideogames = genreType === "All" ? videogamesPure : videogamesPure.filter((game) => {
        return game.genres.some((genre) => genre.name === genreType);
      });

      return {...state, videogames: filteredVideogames};
        
    default: return {...state}
  }
};

export default rootReducer