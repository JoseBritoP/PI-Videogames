const { Videogame,Genre} = require('../../db');
const axios = require('axios');
const {APIGames, API_KEY} = process.env;
const cleanArray = require('../../helpers/cleanArray');

const getAllVideogames = async (page) => {
  // BDD
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
  // ? API
  // const videoGamesApiRaw = (await axios.get(`${APIGames}?key=${API_KEY}`)).data.results
  // const videoGamesInfo = cleanArray(videoGamesApiRaw);
  // return [...videogamesBDD,...videoGamesInfo]

 //? 100 videojuegos en el primer llamado: 
  /*
  const pages = [1, 2, 3, 4, 5];

  const promises = pages.map(page => axios.get(`${APIGames}?key=${API_KEY}&page=${page}`));

  const responses = Promise.all(promises);

  const videoGamesInfo = responses.flatMap(response => cleanArray(response.data.results));

  return videoGamesInfo;
  */  

  // ? 20 videojuegos por llamado independiente
  if (!page || page === "" || !Number(page)) {
    const promise = axios.get(`${APIGames}?key=${API_KEY}`);
    const response = await promise;
    const videoGamesInfoPage1 = cleanArray(response.data.results);
    return [...videogamesBDD,...videoGamesInfoPage1];
  }

  const promise = axios.get(`${APIGames}?key=${API_KEY}&page=${page}`);
  const response = await promise;
  const videoGamesInfoPage = cleanArray(response.data.results);
  return [...videoGamesInfoPage];
};



module.exports = getAllVideogames;
