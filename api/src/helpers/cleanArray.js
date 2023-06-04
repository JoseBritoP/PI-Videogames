const cleanArray = (array) =>{
  return array.map((elem)=>{
    const genresMap = elem.genres?.map((genre) => {
      return {
        name : genre.name
      }});
    const plataformsMap = elem.platforms?.map((element) => {
      return {
        name : element.platform.name
      }});

    return {
      id: elem.id,
      name: elem.name,
      background_image: elem.background_image,
      genres: genresMap,
      platforms: plataformsMap,
      rating: elem.rating,
      released: elem.released,
      created: false,
    }
  });
}


module.exports = cleanArray;