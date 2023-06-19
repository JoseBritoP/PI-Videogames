const cleanArray = (array) =>{
  return array.map((elem)=>{
    const genresMap = elem.genres?.map((genre) => {
      return { name : genre.name}
    });

    const platformsMap = elem.platforms?.map((element) => ({name : element.platform.name}));
    return {
      id: elem.id,
      name: elem.name,
      background_image: elem.background_image,
      genres: genresMap || "Unknown",
      platforms: platformsMap || "Unknown",
      rating: elem.rating || 0,
      released: elem.released || "Unknown",
      created: false,
    }
  });
}


module.exports = cleanArray;