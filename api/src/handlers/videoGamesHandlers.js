// Controllers:

const getAllVideoGames = require('../controllers/videoGamesControllers/01-getAllVideoGames')
const getAllVideoGamesByName = require('../controllers/videoGamesControllers/02-getVideoGamesByName')
// Handlers:

const getVideoGames = async (req,res) =>{
  const {name} = req.query;
  try {
    if(!name){
      const videogames = await getAllVideoGames()
      return res.status(200).json(videogames)
      // return res.status(200).json({message: `En esta ruta se traerán todos los videojuegos`})
      
    }else{
      const videogamesName = await getAllVideoGamesByName(name);
      return res.status(200).json(videogamesName)
      // return res.status(200).json({message: `En esta ruta se traerán todos los videojuegos de nombre: ${name}`})
    }
  } catch (error) {
    return res.status(404).json({error: error.message});
  }
};

const getVideoGame = (req,res)=>{
  const {id} = req.params;
  return res.status(200).json({message:`Aquí se traerá el videojuego de id: ${id}`});
}

const postVideoGame = (req,res) => {
  const {name,description,plataforms,image,date,rating} = req.body;
  return res.status(200).json({message: `En esta ruta se creará un videojuego con los siguientes datos:
   nombre: ${name}
   descripción: ${description}
   plataformas: ${plataforms}
   imagen: ${image}
   fecha: ${date}
   rating: ${rating}   
   `})
}


module.exports = {
  getVideoGames,getVideoGame,postVideoGame
}