// Actions-types:

import {GET_ALL_VIDEOGAMES, CLEAN_VIDEOGAMES,GET_VIDEOGAME_DETAIL, CLEAN_VIDEOGAME_DETAIL, GET_ALL_GENRES, GET_ALL_PLATFORMS, GET_VIDEOGAMES_BY_NAME,ORDER, FILTER_BY_GENRES,FILTER_BY_ORIGIN,DELETE_BY_ID} from './actions-types'

// state:

const initialState = {
  videogames: [],
  videogamesAux: [],
  allVideogames: [],
  videogamesFilter:[],
  videogamesFilterAux: [],
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
      allVideogames:action.payload,
      videogamesFilterAux:action.payload,
      videogamesFilter:action.payload
    };
    //! VideogamesQuery
    case GET_VIDEOGAMES_BY_NAME: return {...state,videogames: action.payload,videogamesAux: action.payload,allVideogames: action.payload,videogamesFilterAux:action.payload,videogamesFilter:action.payload};
    case CLEAN_VIDEOGAMES: return {...state,videogames: [],videogamesAux:[]};
    //! VideogameById
    case GET_VIDEOGAME_DETAIL: return {...state,videogameDetail: action.payload};
    case CLEAN_VIDEOGAME_DETAIL: return {...state,videogameDetail:{}};
    //! DELETE BY ID
    case DELETE_BY_ID:

      const cleanVideogames = [...state.allVideogames].filter((game)=> game.id !== action.payload)
      return {...state,videogames:cleanVideogames,videogamesAux: cleanVideogames,videogamesFilter: cleanVideogames, videogamesFilterAux: cleanVideogames,allVideogames: cleanVideogames};

    //! getAllGenres
    case GET_ALL_GENRES: return {...state,getAllGenres: action.payload};
    //! getAllPlatforms
    case GET_ALL_PLATFORMS: return {...state,getAllPlatforms: action.payload};
    //! Filter created / Api 
    case FILTER_BY_ORIGIN: 

      const OriginType = action.payload;

      const videogamesDepFilter = [...state.videogamesFilter];

      if(OriginType === "created"){
        const videogamesInBDD = videogamesDepFilter.filter((game) => game.created === true);
        return {...state,videogames:videogamesInBDD,videogamesAux:videogamesInBDD};
      } else if (OriginType === "api"){
        const videogamesApi = videogamesDepFilter.filter((game) => game.created === false);
        return {...state,videogames:videogamesApi,videogamesAux:videogamesApi}
      } else if (OriginType === "All"){
        return {...state,videogames:videogamesDepFilter,videogamesAux:videogamesDepFilter}
      } else {

        const allVideogames = [...state.allVideogames]

        if(OriginType ==="workApi"){
          const videogamesApi = allVideogames.filter((game) => game.created === false);
        return {...state,videogames:videogamesApi,videogamesAux:videogamesApi,videogamesFilterAux:videogamesApi}
        } else if (OriginType === "workBdd"){
          const videogamesInBDD = allVideogames.filter((game) => game.created === true);
          return {...state,videogames:videogamesInBDD,videogamesAux:videogamesInBDD,videogamesFilterAux:videogamesInBDD};
        }

        return{...state,videogames:allVideogames,videogamesAux:allVideogames,videogamesFilterAux:allVideogames,videogamesFilter:allVideogames}
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
    case FILTER_BY_GENRES:

      const genreType = action.payload;
    
      const videogamesPure =  [...state.videogamesFilterAux];
      // const filteredVideogames = genreType === "All" ? videogamesPure : videogamesPure.filter((game) => {
      //   return game.genres.some((genre) => genre.name === genreType);
      // });
      const filteredVideogames = genreType === "All" ? videogamesPure : videogamesPure.filter((game) => game.genres.map((genre) => genre.name).includes(genreType));

      return {...state, videogames: filteredVideogames,videogamesAux: filteredVideogames,videogamesFilter: filteredVideogames};

    //! case Default
    default: return {...state}
  }
};

export default rootReducer