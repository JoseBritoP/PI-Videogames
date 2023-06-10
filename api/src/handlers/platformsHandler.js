// Controller
const getPlatforms = require('../controllers/platformsController/01-getAllPlatforms')
// Handler:

const getAllPlatforms = async (req,res) => {
  try {
    const platformsApi = await getPlatforms()
    return res.status(200).json(platformsApi)
  } catch (error) {
    return res.status(404).json({error: error.message})
  }
  // return res.status(200).json({message: `Aquí se mostrarán todas las plataformas de los juegos`})
};

module.exports = getAllPlatforms;