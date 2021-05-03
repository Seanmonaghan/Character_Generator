const sequelize = require('../config/connection');
const { User, Character, Game } = require('../models');

const userData = require('./userData.json');
const gameData = require('./gameData.json');
const characterData = require('./characterData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });



  for (const game of gameData) {
    await Game.create({
      ...game,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const character of characterData) {
    await Character.create({
      ...character,
      user_id: users[Math.floor(Math.random() * users.length)].id
    });
  }

  process.exit(0);
};

seedDatabase();

