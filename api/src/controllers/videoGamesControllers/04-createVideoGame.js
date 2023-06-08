const { Videogame , Genre } = require('../../db');

const createVideoGame = async (name, description, platforms, background_image, released, rating, genres) => {
  // console.log(platforms) // ["PC","PS5","XBOX-ONE"]
  // Formatear plataforms como un array de objetos
  const platformsMap = platforms.map((platform) => {
    return { name: platform };
  });

  // Formatear genres como un array de objetos
  // const genresFormat = genres.split(" ").map((genre) => {
  //   return { name: genre };
  // });

  // En genresFormat hago una petición a la base de datos donde por cada genre que nos pasan por body
  // lo busco en la base de datos y si existe conexión, entonces hago el format
  const genresFormat = genres.split(" ").map(async (genreName) => {
    const genreInBDD = await Genre.findOne({ where: { name: genreName } });
    if (genreInBDD) {
      return { id: genreInBDD.id, name: genreInBDD.name };
    }
  });
  // Como es una promesa, ya que podemos buscar muchos genres, lo resolvemos con un Promise.all, siendo
  // resolvedGenres el valor de resolución de todas las promesas, es decir el formato de genres que apliqué
  const resolvedGenres = await Promise.all(genresFormat);

  const videoGameFormat = {
    name,
    background_image,
    released,
    platforms: platforms,
    description,
    rating,
  };
  // console.log(videoGameFormat.platforms) // [{name: "PC"},{name: "PS5"},{name: "XBOX-ONE"}]

  const newVideoGame = await Videogame.create(videoGameFormat);

  if (genres && genres.length > 0) {
    const genresBDD = await Genre.findAll({ where: { name: resolvedGenres.map((genre) => genre.name) } });
    await newVideoGame.addGenres(genresBDD);
  }
  // console.log(newVideoGame.platforms); // [ 'PC', 'PS5', 'XBOX-ONE' ]
  // console.log(platformsMap) // [ { name: 'PC' }, { name: 'PS5' }, { name: 'XBOX-ONE' } ]
  return {
    id: newVideoGame.id,
    name: newVideoGame.name,
    background_image: newVideoGame.background_image,
    description: newVideoGame.description,
    platforms: platformsMap,
    genres: resolvedGenres,
    rating: newVideoGame.rating,
    released: newVideoGame.released,
    created: true,
  };
};

module.exports = createVideoGame;
