const router = require('express').Router();
const { Game, Review } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', async (req, res) => {
    try {
        const gameData = await Game.findAll();
        const games = gameData.map((game) => game.get({ plain: true }));

        res.render('homepage', {
            games,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/game/:id', withAuth, async (req, res) => {
    try {
        const gameData = await Game.findByPk(req.params.id);
        const reviewData = await Game.findAll({
            include: [{
                model: Review,
                where: {
                    game_id: req.params.id
                }
            }]
        });
        const games = gameData.get({ plain: true });
        const reviews = reviewData.map(review=>review.get({ plain: true }));
        // console.log(reviews)
        const dataGame = {
            games,
            reviews,
            logged_in: req.session.logged_in,
            player_id: req.session.player_id
        }
        console.log(req.session.logged_in);
        res.render('game', dataGame)

    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});
module.exports = router;
