const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rating extends Model { }

Rating.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        player_name: {
            type: DataTypes.STRING,
            references: {
                model: 'player',
                key: 'name',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: Rating,
    }
);

module.exports = Rating;