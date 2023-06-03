// Controllers:


// Handlers:

const getVideoGames = (req,res) =>{
  const {name} = req.query;
  if(!name){
    return res.status(200).json({message: `En esta ruta se traerán todos los videojuegos`})
    
  }else{
    return res.status(200).json({message: `En esta ruta se traerán todos los videojuegos de nombre: ${name}`})
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