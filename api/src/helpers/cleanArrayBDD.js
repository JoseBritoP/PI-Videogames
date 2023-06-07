const cleanArrayBDD = (videogame) => {
  return {
    id: videogame.id,
    name: videogame.name,
    background_image: videogame.background_image,
    genres: videogame.Genres?.map((genre) => ({ name: genre.name })),
    created: videogame.created,
  };
};

module.exports = cleanArrayBDD;