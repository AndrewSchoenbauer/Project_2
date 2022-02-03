const Player = require('./Player');
const Review = require('./Review');
const Rating = require('./Rating');
const Game = require('./Game');

Player.hasMany(Review, {
    foreignKey: 'player_id',
});

Review.belongsTo(Player, {
    foreignKey: 'player_id'
});

Player.hasMany(Rating, {
    foreignKey: 'player_id',
});

Rating.belongsTo(Player, {
    foreignKey: 'player_id'
});

Game.hasMany(Review, {
    foreignKey: 'review_id'
});

Review.belongsTo(Game, {
    foreignKey: 'review_id'
});

Game.hasMany(Rating, {
    foreignKey: 'rating_id'
});

Rating.belongsTo(Game, {
    foreignKey: 'rating_id'
});

module.exports = { Player, Review, Rating };