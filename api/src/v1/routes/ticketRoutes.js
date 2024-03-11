const express = require('express');
const apicache = require('apicache');
const router = express.Router();
const cache = apicache.middleware;
const workoutController = require('../controllers/ticketController');