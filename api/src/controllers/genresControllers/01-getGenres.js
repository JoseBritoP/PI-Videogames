const axios = require('axios');
const {APIGenres,API_KEY} =  process.env;

const getGenresVideoGames =  () => {
  const genresApi = axios.get(`${APIGenres}?key=${API_KEY}`)
  // .then((data)=> data.data.results?.map((genre)=>genre.name))
  .then((response)=> {
    const genres = response.data.results?.map((genre) => ({ name: genre.name }));
    return genres;
  })
  .catch((error)=> new Error(error))
  return genresApi;
}


module.exports = getGenresVideoGames;