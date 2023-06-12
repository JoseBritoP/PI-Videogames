// Actions-types:

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
    default: return {...state}
  }
};

export default rootReducer