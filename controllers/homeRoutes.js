const router = require('express').Router();
const { Player, Review } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', async (req, res) => {
    try {
        const reviewData = await Review.findAll({
            include: [
                {
                    model: Player,
                    attributes: ['name'],
                },
            ],
        });


        const reviews = reviewData.map((review) => review.get({ plain: true }));

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

