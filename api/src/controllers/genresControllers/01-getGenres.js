const axios = require('axios');
const {APIGenres,API_KEY} =  process.env;
const {Genre} = require('../../db');

const getGenresVideoGames = async () => {
  try {
    // Guardo el valor del objeto axios en response
    const response = await axios.get(`${APIGenres}?key=${API_KEY}`);

    // Guardo en genres el array de objetos que nos interesa, genres
    const genres = response.data.results;

    // Como es un array, realizo un map de toda la info solo me quedó con la propiedad nombre
    const genresMap = genres?.map((genre) => ({ name: genre.name }));

    // En promises hago un map de genresMap donde por cada género que me da la api, busco o creo un objeto donde tenga como nombre el género
    const promises = genresMap.map((genre) => Genre.findOrCreate({ where: genre }));
    
    // Utilizo Promise.all para resolver la promesa del método findOrCreate
    // Guardo en results el valor de resolución de la promesa que hay en promises
    // genre es {name: genre.name} por parte de genresMap
    const results = await Promise.all(promises);
  
    // Guardo en createdGenres un mapeo de los resultados trayendome solo el primer valor, siendo este el objeto creado o encontrado
    // utilizo .get({plain:true}) para solo mostrar en consola dataValues { id, name }
    const createdGenres = results.map((result) => result[0].get({ plain: true }));
    // console.log(createdGenres);
    return createdGenres;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = getGenresVideoGames;