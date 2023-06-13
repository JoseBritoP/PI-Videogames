// Controllers:

const {getAllVideoGames,  getVideoGamesByName, getVideogameByIdApi,getVideogameByIdBDD,createVideoGame, deleteAVideoGameAPI,deleteAVideoGameBDD } =  require('../controllers/index');

// Handlers:

const getVideoGames = async (req,res) =>{
  const { name } = req.query;
  try {
    const videogames = name 
    ? await getVideoGamesByName(name) 
    : await getAllVideoGames();
    return res.status(200).json(videogames);
  } catch (error) {
    return res.status(404).json({error: error.message});
  };
};

const getVideoGame = async (req,res)=>{
  const {id} = req.params;
  // return res.status(200).json({message:`Aquí se traerá el videojuego de id: ${id}`});
  try {
    const videogameFound = isNaN(id) ? await getVideogameByIdBDD(id) : await getVideogameByIdApi(id);
    return res.status(200).json(videogameFound);
  } catch (error) {
    console.log(error)
    return res.status(404).json({error: error.message})
  }
}

const postVideoGame = async (req,res) => {
  const {name,description,platforms,background_image,released,rating,genres} = req.body;
  try {
    const newVideoGame = await createVideoGame(name,description,platforms,background_image,released,rating,genres);
    if(!newVideoGame) throw Error (`No se pudo crear el videojuego`);
    return res.status(201).json(newVideoGame);
  } catch (error) {
    return res.status(404).json({error:error.message});
  }
  // return res.status(200).json({message: `En esta ruta se creará un videojuego con los siguientes datos:
  //  nombre: ${name}
  //  descripción: ${description}
  //  plataformas: ${platforms}
  //  imagen: ${background_image}
  //  fecha: ${released}
  //  rating: ${rating}
  //  genres: ${genres}
  //  `})
};

const deleteVideoGame = async (req,res) => {
  const { id } = req.params;
  try {                                // bdd : api
    const videogameDeleted = isNaN(id) ? await deleteAVideoGameBDD(id) : await deleteAVideoGameAPI(id);
    return res.status(202).json({deleted:videogameDeleted})
  } catch (error) {
    return res.status(404).json({error:error.message});
  }
};

module.exports = {
  getVideoGames,getVideoGame,postVideoGame, deleteVideoGame,
}