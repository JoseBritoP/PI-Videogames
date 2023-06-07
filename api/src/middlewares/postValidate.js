const { getAllVideoGames } = require('../controllers/index')
module.exports = async  (req,res,next)=>{
  const {name,description,platforms,background_image,released,rating,genres} = req.body;
  try {
    const videogames = await getAllVideoGames();
    if (videogames.some((videogame) => videogame.name === name)) throw new Error(`No puede haber 2 videojuegos con el mismo nombre! ${name} - ${videogames.name}`)  
    if(!name) throw new Error(`Falta el nombre del videojuego`)
    if(!description) throw new Error (`Falta la descripción del juego`);
    if(!platforms) throw new Error (`Faltan las plataformas donde estará el juego`);
    if(!background_image) throw new Error (`Falta la imagen de fondo del videojuego`);
    if(!released) throw new Error (`Falta la fecha de lanzamiento del videojuego`);
    if(!rating) throw new Error (`Falta la clasificación/rate del juego`);
    if(!genres) throw new Error (`Faltan los géneros del videojuego`);
  } catch (error) {
    return res.status(400).json({error: error.message})    
  }
  next();
};