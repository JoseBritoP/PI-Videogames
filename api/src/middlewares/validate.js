const { getAllVideoGames } = require('../controllers/index')
module.exports = async  (req,res,next)=>{
  const {name,description,plataforms,image,released,rating,genres} = req.body;
  const videogames = await getAllVideoGames();
  if(name === videogames.name) throw Error(`No puede haber 2 videojuegos con el mismo nombre! ${name} - ${videogames.name}`)  
  if(!name) throw Error(`Falta el nombre del videojuego`)
  if(!description) throw Error (`Falta la descripción del juego`);
  if(!plataforms) throw Error (`Faltan las plataformas donde estará el juego`);
  if(!image) throw Error (`Falta la imagen de fondo del videojuego`);
  if(!released) throw Error (`Falta la fecha de lanzamiento del videojuego`);
  if(!rating) throw Error (`Falta la clasificación/rate del juego`);
  if(!genres) throw Error (`Faltan los géneros del videojuego`);
  next();
};