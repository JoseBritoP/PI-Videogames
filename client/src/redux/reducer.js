// Actions-types:
import {GET_ALL_VIDEOGAMES, CLEAN_VIDEOGAMES,GET_VIDEOGAME_DETAIL, CLEAN_VIDEOGAME_DETAIL, GET_ALL_GENRES, GET_ALL_PLATFORMS, GET_VIDEOGAMES_BY_NAME,ORDER, FILTERED_BY_GENRES,FILTER_CREATED,FILTER_BY_RELEASED} from './actions-types'

// state:

const initialState = {
  videogames: [],
  videogamesAux: [],
  allVideogames: [],
  videogameDetail: {},
  getAllGenres: [],
  getAllPlatforms: [],
}

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    //! AllVideogames
    case GET_ALL_VIDEOGAMES: return {...state,
      videogames: action.payload,
      videogamesAux: action.payload,
      allVideogames:action.payload
    };
    //! VideogamesQuery
    case GET_VIDEOGAMES_BY_NAME: return {...state,videogames: action.payload,videogamesAux: action.payload,allVideogames: action.payload};
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

      const videogames = [...state.allVideogames];

        if(crit === "created"){
          const videogamesInBDD = videogames.filter((game) => game.created === true);
          return {...state,videogames:videogamesInBDD,videogamesAux:videogamesInBDD};
        } else if (crit === "api"){
          const videogamesApi = videogames.filter((game) => game.created === false);
          return {...state,videogames:videogamesApi,videogamesAux:videogamesApi}
        } else{
          return{...state,videogames:videogames,videogamesAux:videogames}
        };
    //! Order 
    case ORDER:
      const orderType = action.payload;
      const notOrderedVideogames =  [...state.videogamesAux];
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
      return{...state, videogames: orderType === "---" ? notOrderedVideogames : orderedVideogames};
    //! FilterByGenre
    case FILTERED_BY_GENRES:

      const genreType = action.payload;
    
      const videogamesPure =  [...state.videogamesAux];;
      const filteredVideogames = genreType === "All" ? videogamesPure : videogamesPure.filter((game) => {
        return game.genres.some((genre) => genre.name === genreType);
      });

      return {...state, videogames: filteredVideogames};

    //! FilterByDate
    case FILTER_BY_RELEASED:
      const dateType = action.payload.split("-")[0];
      const notFilteredvideogames = [...state.videogamesAux];
      const filteredByDateVideogames = dateType === "unk" ? notFilteredvideogames.filter((game)=>game.released === "Unknown") : notFilteredvideogames.filter((game)=>game.released === dateType);
      return {...state,videogames: filteredByDateVideogames}
    //! case Default
    default: return {...state}
  }
};

export default rootReducer