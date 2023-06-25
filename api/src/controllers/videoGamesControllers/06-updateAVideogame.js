const {Videogame,Genre} = require('../../db');
const { Op } = require('sequelize');


const updateAVideogame = async (id,name,platforms,background_image,released,rating,genres) => {
  // 
  // if(!id) throw Error(`El id es obligatorio`);
  // if(Number(id)) throw Error(`Solo se puede actualizar los videojuegos creados, no los de la api!`);

  // Verificamos si está o no:
  const videogameInBDD = await Videogame.findByPk(id,{
    include:{
      model: Genre,
      attributes: ['id','name'],
      through: { attributes: []} //Excluye la tabla intermedia;
    },
  });
  
  if(!videogameInBDD) throw Error (`No existe en la base de datos el videojuego de id: ${id}`);

  // Match genres

  const genresFormat = genres.map(async (genre) => {
    const genreInBDD = await Genre.findOne({ where: { name: genre } });
    const allGenres = await Genre.findAll();
    if (!genreInBDD) throw Error(`El género ${genre} no existe en la base de datos! Ingrese uno de los existentes: ${allGenres.map((genre) => genre.name)}`);
    return genreInBDD.name; // Devolver solo el nombre del género
  });

  const resolvedGenres = await Promise.all(genresFormat);
  const genresBDD = await Genre.findAll({
    where: {
      name: {
        [Op.in]: resolvedGenres.map((genre) => genre) // Usar [Op.in] para buscar nombres en el arreglo
      }
    }
  });

  // Videogame:
  videogameInBDD.name = name || videogameInBDD.name;
  videogameInBDD.background_image = background_image || videogameInBDD.background_image;
  videogameInBDD.platforms = platforms || videogameInBDD.platforms;
  videogameInBDD.rating = rating || videogameInBDD.rating;
  videogameInBDD.released = released || videogameInBDD.released;
  await videogameInBDD.save();
  await videogameInBDD.setGenres(genresBDD);

  const updatedVideogame = {
    id: videogameInBDD.id,
    name: videogameInBDD.name,
    background_image: videogameInBDD.background_image,
    platforms: videogameInBDD.platforms,
    genres: resolvedGenres,
    rating: videogameInBDD.rating,
    released: videogameInBDD.released
  }
  return updatedVideogame;
};

module.exports = updateAVideogame;