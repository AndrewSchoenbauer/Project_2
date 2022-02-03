const router = require('express').Router();
const { Game } = require('../models');
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

router.get('/game/:id', async (req, res) => {
    try {
        const gameData = await Game.findByPk(req.params.id);

        const games = gameData.get({ plain: true });

        res.render('game', {
            ...games,
            // logged_in: req.session.logged_in
        });
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
