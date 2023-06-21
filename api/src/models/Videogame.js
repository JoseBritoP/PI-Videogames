const {DataTypes} = require('sequelize');
const platforms = [  "PlayStation 5",
"Xbox Series S/X",
"PlayStation 4",
"PC",
"PlayStation 3",
"Xbox 360",
"Xbox One",
"Nintendo Switch",
"Linux",
"macOS",
"Android",
"PS Vita",
"iOS",
"Xbox",
"Web",
"Wii U",
"Nintendo 3DS",
"PlayStation 2",
"Dreamcast"];
module.exports = (sequelize) => {
  sequelize.define("Videogame",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    platforms: {
      // type: DataTypes.ARRAY(DataTypes.STRING),
      type: DataTypes.ENUM(platforms),
      allowNull: false,
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    released: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },{ 
    timestamps: false 
  });
};



