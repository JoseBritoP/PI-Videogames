const axios = require('axios');
const {APIGames, API_KEY} = process.env;
const cleanPlatforms = require('../../helpers/cleanPlatforms');

const getPlatforms = async () => {
  const pages = [1, 2, 3, 4, 5];
  const promises = pages.map((page) => axios.get(`${APIGames}?key=${API_KEY}&page=${page}`));
  const responses = await Promise.all(promises);
  const videoGamesInfoPlatforms = responses.flatMap((response) => cleanPlatforms(response.data.results));
  // console.log(videoGamesInfoPlatforms) //array de objetos con cada plataforma

  const platformNames = [];

 videoGamesInfoPlatforms.forEach((videoGame) => {
  videoGame.platforms.forEach((videoGamePlatform) => {
    const platformName = videoGamePlatform.name;
    // console.log(platformName) //Los nombres de todas las plataformas
    // Verificar si la plataforma ya existe en platformNames
    if (!platformNames.includes(platformName)) {
      // Si no existe, agregarla al array
      platformNames.push(platformName);
    }
  });
});
  return platformNames;
};

module.exports = getPlatforms;