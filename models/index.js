const Player = require('./Player');
const Review = require('./Review');
const Rating = require('./Rating');

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

module.exports = { Player, Review, Rating };