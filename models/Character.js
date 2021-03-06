const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        personality: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hairstyle: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dress_style: {
            type: DataTypes.STRING,
            allowNull: true
        },
        age: {
            type:DataTypes.INTEGER,
            allowNull: true
        },
        strength: {
            type:DataTypes.INTEGER,
            allowNull: true
        },
        defense: {
            type:DataTypes.INTEGER,
            allowNull: true
        },
        stamina: {
            type:DataTypes.INTEGER,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'game',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'character',
      }
);

module.exports = Character;

