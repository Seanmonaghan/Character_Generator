const User = require('./User');
const Character = require('./Character');
const Game = require('./Game');

User.hasMany(Game, {
    foreignKey: 'user_id'
});

Game.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Character, {
    foreignKey: 'user_id'
});

Character.belongsTo(User, {
    foreignKey: 'user_id'
});

Game.hasMany(Character, {
    foreignKey: 'game_id'
});

Character.belongsTo(Game, {
    foreignKey: 'game_id'
});

module.exports = { User, Character, Game }