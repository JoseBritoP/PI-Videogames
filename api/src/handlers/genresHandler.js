// Controller:

const getGenresVideoGames = require('../controllers/genresControllers/01-getGenres');
const createGenre = require('../controllers/genresControllers/02-createGenre');
const deleteGenreController = require('../controllers/genresControllers/03-deleteGenre');

// Handler:

const getAllGenres = async (req,res)=>{
  try {
    const genres = await getGenresVideoGames();
    return res.status(200).json(genres)
  } catch (error) {
    return res.status(404).json({error: error.message})
  }
  // return res.status(200).json({message: `En esta ruta se traerán los géneros de los videojuegos`})
}

const postGenre = async (req,res) => {
  const {name} = req.body;
  try {
    const newGenre = await createGenre(name);
    return res.status(201).json({genreCreated: newGenre});
  } catch (error) {
    return res.status(409).json({error: error.message})
  }
  // return res.status(201).json({message: `Se creará un nuevo genero de nombre: ${name}`})
};

const deleteGenre = async (req,res) => {
  const { id } = req.params;
  try {
    const genreDeleted = await deleteGenreController(id);
    return res.status(200).json({deleted: genreDeleted})
  } catch (error) {
    return res.status(400).json({error: error.message})
  }
};

module.exports = {
  getAllGenres,
  postGenre,
  deleteGenre,
}