const app = require('./index');
// Creamos la conexión de la bdd con el backend:
const{ sequelize } = require('./db');

app.listen(3001,()=>{
  sequelize.sync({force:true}) // Luego lo pasamos a alter:true para que no se borren los datos
  console.log('Server on port 3001')
});