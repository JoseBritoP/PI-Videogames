const cleanArrayDetail = (array) =>{
  return array.map((game)=>{
    const genresMap = game.genres?.map((genre) => {
      return { name : genre.name };
    });
    const plataformsMap = game.platforms?.map((game) => {
      return { name : game.platform.name };
    });

    const descriptionSplit = game.description_raw?.split(".")
    const description = descriptionSplit.join("")

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
  });
};

module.exports = cleanArrayDetail;