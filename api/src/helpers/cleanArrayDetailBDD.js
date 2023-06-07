const cleanArrayDetailBDD = (videoGame) => {
  // console.log(videoGame.platforms)
  return {
    id: videoGame.id,
    name: videoGame.name,
    background_image: videoGame.background_image,
    description: videoGame.description,
    // platforms: videoGame.platforms?.map((platform)=>({name: platform})),
    platforms: videoGame.platforms.map((platform) => JSON.parse(platform)),
    genres: videoGame.Genres.map((genre) => ({ name: genre.name })),
    rating: videoGame.rating,
    released: videoGame.released,
    created: videoGame.created,
  };
};

module.exports = cleanArrayDetailBDD;

