const { Videogame,Genre} = require('../../db');
const axios = require('axios');
const {APIGames, API_KEY} = process.env;
const cleanArrayById = require('../../helpers/cleanArrayById');

const getVideogameByIdApi = async (id) => {
  //Hacemos l
  const videoGameApiRaw = (await axios.get(`${APIGames}/${id}?key=${API_KEY}`)).data
  // console.log(videoGameApiRaw)
  const videoGameInfo = cleanArrayById([videoGameApiRaw]);
  // console.log(videoGameInfo)
  if(!videoGameInfo) throw Error (`No se encontró el videojuego en la API de id ${id}`);
  return videoGameInfo;
};
const getVideogameByIdBDD = async (id) => {
  const videogameBDD = await Videogame.findByPk(id,{
    include:{
      model: Genre,
      attributes: ['name'],
      through:{
        attributes: [], //No quiero valores de la tabla intermedia
      }
    }
  });
  if(!videogameBDD) throw Error (`No se encontró el videojuego en la base de datos de id ${id}`);
  return videogameBDD;
};

module.exports = {
  getVideogameByIdApi,
  getVideogameByIdBDD,
}
