module.exports = (req,res,next) =>{
  const {id} = req.params;
  if(!id) throw Error(`El id es obligatorio`);
  if(Number(id)) return res.status(404).json({error: `Solo se puede actualizar los videojuegos creados, no los de la api!`});
  next();
};