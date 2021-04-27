const router = require('express').Router();
const userRoutes = require('/userRoutes');
const gameRoutes = require('/gameRoutes');
const characterRoutes = require('/characterRoutes');

router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('/games', gameRoutes);

module.exports = router;