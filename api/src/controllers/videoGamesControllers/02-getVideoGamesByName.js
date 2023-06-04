const { Videogame,Genre} = require('../../db');
const axios = require('axios');
const {APIGames, API_KEY} = process.env;
const { Op } = require('sequelize');
const cleanArray = require('../../helpers/cleanArray');

const getAllVideoGamesByName = async (name) =>{
  const query = name.toLowerCase().trim();
  const formattedQuery = `%${query}%`;

  //* videogame bdd
  const videogamesBDD = await Videogame.findAll({
    where:{
      name:{
        [Op.iLike] : formattedQuery,
      },
    },
  });

  //* videogame api
  const videoGamesApiRaw = (await axios.get(`${APIGames}?search=${name}&key=${API_KEY}`)).data.results
  const videoGamesInfo = cleanArray(videoGamesApiRaw);
  const videogamesApiFiltered = videoGamesInfo.filter((game)=> game.name.toLowerCase().trim().includes(query));

  //* videogames:
  const videogames = [...videogamesBDD,...videogamesApiFiltered];
  if(videogames.length === 0) throw Error (`No hay videojuegos llamados ${name}`)
  return videogames;
};

module.exports = getAllVideoGamesByName;