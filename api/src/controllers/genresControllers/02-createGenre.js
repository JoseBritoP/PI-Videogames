const { Genre } = require('../../db');

const createGenre = async (name) => {
  if(name === "" || /\d/.test(name)) throw new Error (`El nombre del género no puede estar vacío o contener números`)
  const nameGenreFormat = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  const genreMatch = await Genre.findOne({ where: { name: nameGenreFormat } });

  if (genreMatch) throw new Error(`Ya existe un género de nombre: ${name}`);

  const newGenre = await Genre.create({ name: nameGenreFormat });

  if (!newGenre) throw new Error(`Hubo un error al crear el género de nombre: ${nameGenreFormat}`);
  
  return newGenre;
};

module.exports = createGenre;