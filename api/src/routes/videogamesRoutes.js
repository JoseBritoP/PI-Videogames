const {Router} = require('express')

// Handlers:
const {getVideoGames,getVideoGame,postVideoGame} = require('../handlers/videoGamesHandlers')

//Middlewares:


//Router:

const videogamesRouter = Router();


//Enrutado:

videogamesRouter.get('/',getVideoGames);
videogamesRouter.get('/:id',getVideoGame);
videogamesRouter.post('/',postVideoGame);

module.exports = videogamesRouter;  