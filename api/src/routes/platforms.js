const {Router} = require('express')

// Handler:
const getAllPlatforms = require('../handlers/platformsHandler')
// Router:

const platformsRouter = Router();

// Enrutado:

platformsRouter.get('/',getAllPlatforms);

module.exports = platformsRouter;