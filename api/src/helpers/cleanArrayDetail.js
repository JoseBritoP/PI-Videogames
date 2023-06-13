const cleanArrayDetail = (array) =>{
  const game = array[0]
  const genresMap = game.genres?.map((genre) => {
    return { name : genre.name };
  });
  const plataformsMap = game.platforms?.map((game) => {
    return { name : game.platform.name };
  });

  const descriptionSplit = game.description_raw?.split(".")
  const description = descriptionSplit.slice(0,4).join("").concat("...")

  return {
    id: game.id,
    name: game.name,
    background_image: game.background_image,
    genres: genresMap,
    platforms: plataformsMap,
    rating: game.rating,
    released: game.released,
    description: description,
    created: false,
  };
  
};

module.exports = cleanArrayDetail;