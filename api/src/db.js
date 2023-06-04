const { Sequelize } = require('sequelize');

// Importamos los modelos:

const VideogameModel = require('./models/videogame')
const GenreModel = require('./models/Genre');
// Credenciales:

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// Instanciamos sequelize:

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{logging:false});

// Definimos los modelos:
// -> Definimos una función pasándole sequelize en la carpeta models
// Le pasamos ua instancia de conexión de sequelize:
VideogameModel(sequelize);
GenreModel(sequelize);

// Destructuring de los modelos para vincularlos:
// En el objeto de sequelize, en la propiedad models se encuentran los que instanciamos:

const {Videogame,Genre} = sequelize.models;

// Relacionar los modelos n:n :

Videogame.belongsToMany(Genre,{through: "VideogameGenre"});
Genre.belongsToMany(Videogame,{through: "VideogameGenre"});

module.exports = {
  sequelize,
  ...sequelize.models
}