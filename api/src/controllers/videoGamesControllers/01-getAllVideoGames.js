const { Videogame,Genre} = require('../../db');
const axios = require('axios');
const {APIGames, API_KEY} = process.env;
const cleanArray = require('../../helpers/cleanArray');
const cleanArrayBDD = require('../../helpers/cleanArrayBDD')

const getAllVideogames = async () => {
  // BDD
  const videogamesBDD = await Videogame.findAll({
    include:{
      model: Genre,
      attributes: ['id','name'],
      through: { attributes: []} //Excluye la tabla intermedia;
    },
      attributes: {
        exclude: ['createdAt','updateAt'] // Excluye los campos de Videogame
    },
  });
  const videogamesBDDFormat = videogamesBDD.map((videogame) => cleanArrayBDD(videogame));
  // const videogamesBDDFormat = videogamesBDD.map((videogame)=>{
  //   return {
  //     id: videogame.id,
  //     name: videogame.name,
  //     background_image: videogame.background_image,
  //     genres: videogame.Genres.map((genre) => ({ name: genre.name })),
  //     created: videogame.created,
  //   }
  // })
  
  // ? API
  // const videoGamesApiRaw = (await axios.get(`${APIGames}?key=${API_KEY}`)).data.results
  // const videoGamesInfo = cleanArray(videoGamesApiRaw);
  // return [...videogamesBDD,...videoGamesInfo]

  // ? 20 videojuegos por llamado independiente
  // if (!page || page === "" || !Number(page)) {
  //   const videoGamesApiRaw = axios.get(`${APIGames}?key=${API_KEY}`);
  //   const response = await videoGamesApiRaw;
  //   const videoGamesInfoPage1 = cleanArray(response.data.results);
  //   return [...videogamesBDD,...videoGamesInfoPage1];
  // }

  // const videoGamesApiRaw = axios.get(`${APIGames}?key=${API_KEY}&page=${page}`);
  // const response = await videoGamesApiRaw;
  // const videoGamesInfoPage = cleanArray(response.data.results);
  // return [...videoGamesInfoPage];

 //? 100 videojuegos en el primer llamado: 

  const pages = [1, 2, 3, 4, 5];

  const promises = pages.map(page => axios.get(`${APIGames}?key=${API_KEY}&page=${page}`));

  const responses = await Promise.all(promises);

  const videoGamesInfo = responses.flatMap(response => cleanArray(response.data.results));

  return [...videogamesBDDFormat,...videoGamesInfo];
};



module.exports = getAllVideogames;
