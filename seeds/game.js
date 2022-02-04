const { Game } = require ('../models');
const gameData =
[
    {
        name: "PUBG",
        image: "/images/pubg.jpg",
        developer: "PUBG corporation",
        release_day: 2018
    },
    {
        name: "Minecraft",
        image: "/images/minecraft.jpg",
        developer: "Mojang Studios",
        release_day: 2011
    },
    {
        name: "Apex Legends",
        image: "/images/apex-legends.jpg",
        developer: "Respawn Entertainment",
        release_day: 2019
    },
    {
        name: "Fornite Battle Royale",
        image: "/images/fortnite.jpg",
        developer: "Epic Games",
        release_day: 2017
    },
    {
        name: "CS: Global Offensive",
        image: "/images/CSgo.jpg",
        developer: "Valve Corporation",
        release_day: 2012
    },
    {
        name: "HearthStone",
        image: "/images/hearthstone.png",
        developer: "Blizzard Entertainment",
        release_day: 2012
    },
    {
        name: "League of Legends",
        image: "/images/league-of-legends.png",
        developer: "Riot Games",
        release_day: 2009
    },
    {
        name: "Call of Duty Mobile",
        image: "/images/CODmbobile.jpg",
        developer: "TiMi Studios",
        release_day: 2019
    },
    {
        name: "Among Us",
        image: "/images/amoung-us.jpg",
        developer: "InnerSloth LLC",
        release_day: 2018
    },
    {
        name: "Call of Duty Warzone",
        image: "/images/warzone.jpg",
        developer: "Activision",
        release_day: 2020
    }
]
const seedGame =() => Game.bulkCreate(gameData);
module.exports = seedGame