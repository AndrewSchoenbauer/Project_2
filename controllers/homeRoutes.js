const router = require('express').Router();
const {Player, Review } = require('../models');
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
  
      res.render('main', { 
        reviews, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  