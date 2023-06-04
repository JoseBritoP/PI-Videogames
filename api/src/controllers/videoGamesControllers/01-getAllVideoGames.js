const { Videogame,Genre} = require('../../db');
const axios = require('axios');
const {APIGames, API_KEY} = process.env;
const cleanArray = require('../../helpers/cleanArray');

const getAllVideogames = async () => {
  const videoGamesApiRaw = (await axios.get(`${APIGames}?key=${API_KEY}`)).data.results
  const videoGamesInfo = cleanArray(videoGamesApiRaw);
  return [...videoGamesInfo]
};



module.exports = getAllVideogames;
/*
id: {
name: {
description: {
platforms: {
background_image:
released: fecha
rating: 
        */ 