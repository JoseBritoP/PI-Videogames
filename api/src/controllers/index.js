const getAllVideoGames = require('./videoGamesControllers/01-getAllVideoGames');
const getVideoGamesByName = require('./videoGamesControllers/02-getVideoGamesByName');
const { getVideogameByIdApi,getVideogameByIdBDD} = require('./videoGamesControllers/03-getVideoGameById');
const createVideoGame = require('./videoGamesControllers/04-createVideoGame')
const { deleteAVideoGameAPI,deleteAVideoGameBDD } = require('./videoGamesControllers/05-deleteAVideogame');

module.exports = {
  getAllVideoGames,
  getVideoGamesByName,
  getVideogameByIdApi,getVideogameByIdBDD,
  createVideoGame,
  deleteAVideoGameAPI,deleteAVideoGameBDD 
}