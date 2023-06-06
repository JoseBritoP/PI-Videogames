const { Videogame,Genre} = require('../../db');
const getAllVideoGames = require('./01-getAllVideoGames')
const {getVideogameByIdApi,getVideogameByIdBDD} = require('./03-getVideoGameById');


const deleteAVideoGameBDD = async (id) => {
  // Identificamos el id del juego a borrar en nuestra bdd
  const videogameDeletedBDD = await getVideogameByIdBDD(id);
  await Videogame.destroy({
    where:{
      id: id
    }
  });
  if(!videogameDeletedBDD) throw Error (`No se eliminó el videojuego de id: ${id}`);
  return videogameDeletedBDD;
};

const deleteAVideoGameAPI = async (id) => {
  // Identificamos el videojuego a eliminar:
  const videogameDeletedAPI = await getVideogameByIdApi(id);
  if(!videogameDeletedAPI)  throw Error (`No se encontró el videojuego a eliminar de id: ${id}`)
  // Realizamos una petición de todos los videojuegos:
  const allVideoGames = await getAllVideoGames();
  const videogamesFiltered = allVideoGames.filter((games) => games.id !== +id);

  // const videogamesFiltered = allVideoGames.filter((game)=>game.id !== +id)
  // return videogamesFiltered;
  return {
    deleted: videogameDeletedAPI,
    games: videogamesFiltered,
  };
};

module.exports = {
  deleteAVideoGameAPI,deleteAVideoGameBDD
}