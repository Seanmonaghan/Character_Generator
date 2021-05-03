const router = require('express').Router();
const { Character, Game, User } = require('../models');
const withAuth = require('../utils/auth')


// Get all characters for the homepage

router.get('/', async (req, res) => {
    try {
        const CharacterGameData = await Character.findAll({
            include: [
                {
                    model: User,
                    all: true,
                    nested: true
                },
            ]
        });

        const dbGameData = await Game.findAll({
            include: [
                {
                    model: User,
                    all: true,
                    nested: true
                }
            ]
        })

        const characters = CharacterGameData.map((character) => character.get({plain: true}));
        const games = dbGameData.map((game) => game.get({plain: true}));

        res.render('homepage', {
            characters:characters,
            games:games,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [
            {
                model: Game,
                required: false,
                all: true
            },
            {
                model: Character,
                required:false,
                all: true
            }
        ],
      });
  
      const user = userData.get({ plain: true });

  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/game/:id', async (req, res) => {
    try {
        const dbGameData = await Game.findByPk(req.params.id, {
            include: [
                {
                    model: Character,
                    required: false,
                    all: true,
                },
                {
                    model: User,
                    required: false,
                    all: true
                }
            ]
        });

        const game = dbGameData.get({ plain: true });
        res.render('game', {game});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/character/:id', async (req, res) => {
    try {
        const characterData = await Character.findByPk(req.params.id, {
            include: [
                {
                    model: Game,
                    required: false,
                    all: true
                },
                {
                    model: User,
                    required:false,
                    all: true
                }
            ]
        });

        const character = characterData.get({plain:true});

        res.render('character', {character});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

module.exports = router;