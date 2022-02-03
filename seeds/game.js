const { Game } = require ('../models');
const gameData =
[
    {
        name: "PUBG",
        
        developer: "PUBG corporation",
        release_day: 2018
    },
    {
        name: "Minecraft",
        
        developer: "Mojang Studios",
        release_day: 2011
    },
    {
        name: "Apex Legends",
       
        developer: "Respawn Entertainment",
        release_day: 2019
    },
    {
        name: "Fornite Battle Royale",
      
        developer: "Epic Games",
        release_day: 2017
    },
    {
        name: "CS: Global Offensive",
        
        developer: "Valve Corporation",
        release_day: 2012
    },
    {
        name: "HearthStone",
        
        developer: "Blizzard Entertainment",
        release_day: 2012
    },
    {
        name: "League of Legends",
        
        developer: "Riot Games",
        release_day: 2009
    },
    {
        name: "Call of Duty Mobile",
       
        developer: "TiMi Studios",
        release_day: 2019
    },
    {
        name: "Among Us",
       
        developer: "InnerSloth LLC",
        release_day: 2018
    },
    {
        name: "Call of Duty Warzone",
        
        developer: "Activision",
        release_day: 2020
    }
]
const seedGame =() => Game.bulkCreate(gameData);
module.exports = seedGame