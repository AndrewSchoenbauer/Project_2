const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const gameRoutes = require('./gameRoutes');
const ratingRoutes = require('./ratingRoutes');

router.use('/login', loginRoutes);
router.use('/game', gameRoutes);
// router.use('/rating', ratingRoutes);

module.exports = router;