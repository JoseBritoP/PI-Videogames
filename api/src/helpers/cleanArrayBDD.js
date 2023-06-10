const cleanArrayBDD = (videogame) => {
  console.log(videogame.platforms) // [ 'PC', 'PS5' ]
  const platformsMap = videogame.platforms?.map((elem) => {
    return {
      name: elem
    };
  });
  // console.log(platformsMap) // [{name: undefined},{name: undefined}]
  // console.log(videogame.Genres) // [{},{},{}]
  return {
    id: videogame.id,
    name: videogame.name,
    background_image: videogame.background_image,
    genres: videogame.Genres?.map((genre) => ({ name: genre.name })),
    platforms: videogame.platforms?.map((platform)=>({name: platform})),
    created: videogame.created,
  };
};

module.exports = cleanArrayBDD;