const {Router} = require('express');
// Importamos las routers:
const videogamesRouter = require('./videogamesRoutes')
const genresRouter = require('./genresRoutes')
const platformsRouter = require('./platforms')
const router = Router();

// Conexión al enrutado:

router.use('/videogames',videogamesRouter)
router.use('/genres',genresRouter)
router.use('/platforms',platformsRouter)

module.exports = router;