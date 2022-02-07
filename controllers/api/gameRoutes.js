const router = require('express').Router();
const { Review } = require('../../models');

router.post('/:id', async (req, res) => {
  try {
    const newReview = await Review.create({
      ...req.body,
      player_id: req.session.player_id,
      game_id: req.params.id,
    });
    console.log(newReview);
    const data = {newReview}
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;