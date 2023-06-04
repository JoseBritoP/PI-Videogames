const axios = require('axios');
const {APIGenres,API_KEY} =  process.env;
const {Genre} = require('../../db');

const getGenresVideoGames =  () => {
  const genresApi = axios.get(`${APIGenres}?key=${API_KEY}`)
  // .then((data)=> data.data.results?.map((genre)=>genre.name))
  .then((response)=> {
    const genres = response.data.results;
    const genresMap = genres?.map((genre) => ({ name: genre.name }));
    const GenreInBDD = Genre.bulkCreate(genresMap);
    // Si realizo varias peticiones almaceno los mismos valores una y otra vez
    //! Arreglar
    return GenreInBDD;
  })
  .catch((error)=> new Error(error))
  return genresApi;
}


module.exports = getGenresVideoGames;