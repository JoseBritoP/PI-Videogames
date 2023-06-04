const { Videogame,Genre} = require('../../db');
const axios = require('axios');
const {APIGames, API_KEY} = process.env;
const cleanArray = require('../../helpers/cleanArray');

const getAllVideogames = async () => {
  const videogamesBDD = await Videogame.findAll({
    include:{
      model: Genre,
      attributes: ['name'],
      through: { attributes: []} //Excluye la tabla intermedia;
    },
      attributes: {
        exclude: ['createdAt','updateAt'] // Excluye los campos de Videogame
    },
  });
  const videoGamesApiRaw = (await axios.get(`${APIGames}?key=${API_KEY}`)).data.results
  const videoGamesInfo = cleanArray(videoGamesApiRaw);
  return [...videogamesBDD,...videoGamesInfo]
};



module.exports = getAllVideogames;
