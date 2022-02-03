const router = require('express').Router();
const { Review } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newReview = await Review.create({
      ...req.body,
      player_id: req.session.player_id,
      game_id: req.body.game_id,
    });

    res.status(200).json(newReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;