const axios = require('axios');
const {APIGenres,API_KEY} =  process.env;
const {Genre} = require('../../db');

const getGenresVideoGames = () => {
  return axios.get(`${APIGenres}?key=${API_KEY}`)
  .then((response) => {
    const genres = response.data.results;
    const genresMap = genres.map((genre) => ({ name: genre.name }));

    const promises = genresMap.map((genre) => {
      return Genre.findOrCreate({ where: genre });
    });

    return Promise.all(promises)
      .then((results) => {
        const createdGenres = results.map((result) => result[0].get({ plain: true }));
        return createdGenres;
      });
  })
  .catch((error) => {
    throw new Error(error);
  });
};

module.exports = getGenresVideoGames;