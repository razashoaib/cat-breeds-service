const express = require('express');
const logger = require('simple-node-logger').createSimpleLogger();
const { validateRequest } = require('../middlewares/requestValidator');
const { CatBreedRoutes } = require('./CatBreedRoutes');

const router = express.Router();

// GET top five cat breeds based on the 'type' query string
// for e.g /cat-breeds/top-five?type=combined
router.get('/cat-breeds/top-five', validateRequest,
    async (req, res) => CatBreedRoutes({ logger }).getTopFiveCatBreeds(req, res));

module.exports = router;
