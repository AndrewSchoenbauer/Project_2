const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model { }

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        Title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        release_date: {
            type: DataTypes.STRING,
        },
        developer: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',
    }
);

module.exports = Game;