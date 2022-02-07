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
    },
    {
        name: "Dota 2",
        image: "/images/dota-2.jpg",
        developer: "Valve",
        release_day: 2013
    },
    {
        name: "Halo: Infinity",
        image: "/images/halo.jpg",
        developer: "343 Industries",
        release_day: 2021
    },
    {
        name: "Rocket League",
        image: "/images/rocket-league.jpg",
        developer: "Psyonix",
        release_day: 2015
    },
    {
        name: "Grand Theft Auto V",
        image: "/images/gta-5.png",
        developer: "Rockstar Games",
        release_day: 2013
    },
    {
        name: "Overwatch",
        image: "/images/overwatch.jpg",
        developer: "Activision Blizzard",
        release_day: 2016
    },
    {
        name: "Dead by Daylight",
        image: "/images/deadby.jpg",
        developer: "Deep Silver",
        release_day: 2016
    },
    {
        name: "Rust",
        image: "/images/rust.jpg",
        developer: "Facepunch Studios",
        release_day: 2018
    },
    {
        name: "Red Dead Redemption 2",
        image: "/images/reddead.jpg",
        developer: "Rockstar Games",
        release_day: 2018
    },
    {
        name: "Runescape",
        image: "/images/runescape.jpg",
        developer: "Jagex",
        release_day: 2001
    },
    {
        name: "Tom Clancy's Rainbow Six Siege",
        image: "/images/rainbow.jpg",
        developer: "Ubisoft Montreal",
        release_day: 2015
    }
]
const seedGame =() => Game.bulkCreate(gameData);
module.exports = seedGame