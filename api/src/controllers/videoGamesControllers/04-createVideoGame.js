const { Videogame , Genre } = require('../../db');

const createVideoGame = async (name, description, platforms, background_image, released, rating, genres) => {
  // console.log(platforms) // ["PC","PS5"]

  // ? Formateo de las platforms
  // Formatear plataforms como un array de objetos
  const platformsMap = platforms.map((platform) => ({ name: platform }));
  
  // console.log(platformsMap) // [ { name: 'PC' }, { name: 'PS5' } ]

  // ? Genres match con la base de datos
  // En genresFormat hago una petición a la base de datos donde por cada genre que nos pasan por body
  // lo busco en la base de datos y si existe conexión, entonces hago el format
  // console.log(genres)
  const genresFormat = genres.map(async (genreName) => {
    // genreName: Action RPG Card Fantasy Rouge-like
    const genreInBDD = await Genre.findOne({ where: { name: genreName } });
    console.log("genreInBDD")
    console.log(genreInBDD.dataValues)
    if (genreInBDD) {
      return { id: genreInBDD.id, name: genreInBDD.name };
    } else throw new Error(`El género "${genreName}" no existe en la base de datos.`);
  });
    
  // console.log("GenresFormat:");
  // console.log(genresFormat);
  // Como es una promesa, ya que podemos buscar muchos genres, lo resolvemos con un Promise.all, siendo
  // resolvedGenres el valor de resolución de todas las promesas, es decir el formato de genres que apliqué
  const resolvedGenres = await Promise.all(genresFormat);
  // El valor de resolución de la promesa genresFormat

  // console.log("resolvedGenres:")
  // console.log(resolvedGenres)

  // ? Crear un videojuego

  const videoGameFormat = {
    name,
    background_image,
    released,
    platforms,
    description,
    rating,
  };

  // console.log(videoGameFormat.platforms) // [ 'PC', 'PS5', 'XBOX-ONE' ]
  const newVideoGame = await Videogame.create(videoGameFormat);

    // ? Relación de Videogame con Genre
    const genresBDD = await Genre.findAll({ where: { name: resolvedGenres.map((genre) => genre.name) } });
    await newVideoGame.addGenres(genresBDD);

  // console.log(newVideoGame.dataValues)
  // console.log(newVideoGame.platforms) // [ 'PC', 'PS5' ]
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
