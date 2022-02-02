const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const reviewRoutes = require('./reviewsRoutes');
const ratingRoutes = require('./ratingRoutes');

router.use('/login', loginRoutes);
// router.use('/reviews', reviewRoutes);
// router.use('/rating', ratingRoutes);

module.exports = router;