const cleanPlatforms = (array) => {
  return array.map((game) => {
    const platformsMap = game.platforms?.map((platform) => {
      return { name: platform.platform.name };
    });
    return {
      platforms: platformsMap,
    };
  });
};

module.exports = cleanPlatforms