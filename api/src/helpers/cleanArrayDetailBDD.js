const cleanArrayDetailBDD = (videoGame) => {
  // console.log(videoGame.platforms) // ["PC","PS5","XBOX-ONE"]
  return {
    id: videoGame.id,
    name: videoGame.name,
    background_image: videoGame.background_image,
    description: videoGame.description,
    platforms: videoGame.platforms.map((platform) =>({nane: platform})),
    genres: videoGame.Genres.map((genre) => ({ name: genre.name })),
    rating: videoGame.rating,
    released: videoGame.released,
    created: videoGame.created,
  };
};

module.exports = cleanArrayDetailBDD;

