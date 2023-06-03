// Controller:



// Handler:

const getAllGenres = (req,res)=>{
  return res.status(200).json({message: `En esta ruta se traerán los géneros de los videojuegos`})
}


module.exports = getAllGenres