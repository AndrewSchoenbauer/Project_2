const router = require('express').Router();
const { Game, Rating, Review } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', async (req, res) => {
    try {
        const gameData = await Game.findAll({
            include: [
                {
                    model: Review,
                    attributes: ['description'],
                },
                {
                    model: Rating,
                    attributes: ['rating'],
                }
            ],
        });


        const reviews = gameData.map((game) => game.get({ plain: true }));

        res.render('homepage', {
            reviews,
            logged_in: req.session.logged_in
        });
    } catch (err) {
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
