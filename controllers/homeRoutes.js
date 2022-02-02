const router = require('express').Router();
const { Player } = require('../models');
const withAuth = require('../utils/auth');