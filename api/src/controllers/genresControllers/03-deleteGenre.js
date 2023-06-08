const {Genre} = require('../../db');

const deleteGenreController = async (id) => {
  if(!isNaN(id)) throw new Error (`El id otorgado ${id} no coincide con el tipo de id uuid del a base de datos`)
  const deletedGenre = await Genre.destroy({
    where:{
      id:id,
    }
  })
  if(!deletedGenre) throw new Error(`No se pudo eliminar el género de id ${id}`)
  return deletedGenre;
};

module.exports = deleteGenreController;
