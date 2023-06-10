const { Videogame,Genre} = require('../../db');
const axios = require('axios');
const {APIGames, API_KEY} = process.env;
const { Op } = require('sequelize');
const cleanArray = require('../../helpers/cleanArray');
const cleanArrayBDD = require('../../helpers/cleanArrayBDD')

const getAllVideoGamesByName = async (name) =>{
  // Formateo la query:
  const query = name.toLowerCase().trim();
  const formattedQuery = `%${query}%`;

  //* videogame bdd incluyendo el modelo Genre
  const videogamesBDD = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ['name'],
      through: { attributes: [] }, // Excluye la tabla intermedia
    },
    //Aplicando la busqueda, buscamos de los videojuegos creados que incluyan el modelo Genre, que el nombre sea como la query
    where: {
      name: {
        [Op.iLike]: formattedQuery,
      },
    },
  });
  // Formateo cada videojuego de la bdd: 
  const videogamesBDDFormat = videogamesBDD.map((videogame) => cleanArrayBDD(videogame));

  //* videogame api
  // Utilizo el endpoint de la api para buscar por nombre:
  const videoGamesApiRaw = (await axios.get(`${APIGames}?search=${name}&key=${API_KEY}`)).data.results
  // console.log("VideogamesApiRaw")
  // console.log(videoGamesApiRaw)
  // Formateo la información:
  const videoGamesInfo = cleanArray(videoGamesApiRaw);
  // console.log("Videogames info")
  // console.log(videoGamesInfo)
  // Aplico el filtro:
  const videogamesApiFiltered = videoGamesInfo.filter((game)=> game.name.toLowerCase().trim().includes(query));
  // console.log("VideogamesApiFiltered")
  // console.log(videogamesApiFiltered)
  //* videogames:
  const videogames = [...videogamesBDDFormat,...videogamesApiFiltered];
  if(videogames.length === 0) throw Error (`No hay videojuegos llamados ${query}`)

  // * Limitar la busqueda a 15 en caso de que haya más:
  const limitVideogames = videogames.slice(0,15);
  return limitVideogames;
};

module.exports = getAllVideoGamesByName;