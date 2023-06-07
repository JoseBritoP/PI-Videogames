const { Videogame,Genre} = require('../../db');
const axios = require('axios');
const {APIGames, API_KEY} = process.env;
const { Op } = require('sequelize');
const cleanArray = require('../../helpers/cleanArray');
const cleanArrayBDD = require('../../helpers/cleanArrayBDD')

const getAllVideoGamesByName = async (name) =>{
  const query = name.toLowerCase().trim();
  const formattedQuery = `%${query}%`;

  //* videogame bdd
  const videogamesBDD = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ['name'],
      through: { attributes: [] }, // Excluye la tabla intermedia
    },
    where: {
      name: {
        [Op.iLike]: formattedQuery,
      },
    },
  });

  const videogamesBDDFormat = videogamesBDD.map((videogame) => cleanArrayBDD(videogame));

  //* videogame api
  const videoGamesApiRaw = (await axios.get(`${APIGames}?search=${name}&key=${API_KEY}`)).data.results
  const videoGamesInfo = cleanArray(videoGamesApiRaw);
  const videogamesApiFiltered = videoGamesInfo.filter((game)=> game.name.toLowerCase().trim().includes(query));

  //* videogames:
  const videogames = [...videogamesBDDFormat,...videogamesApiFiltered];
  if(videogames.length === 0) throw Error (`No hay videojuegos llamados ${name}`)

  // * Limitar la busqueda a 15 en caso de que haya más:
  const limitedVideogames = videogames.slice(0,15);
  return limitedVideogames;
};

module.exports = getAllVideoGamesByName;