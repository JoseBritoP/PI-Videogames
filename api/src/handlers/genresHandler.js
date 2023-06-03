// Controller:

const getGenresVideoGames = require('../controllers/genresControllers/01-getGenres')

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


module.exports = getAllGenres