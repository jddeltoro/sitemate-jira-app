const express = require('express');
const apicache = require('apicache');
const router = express.Router();
const cache = apicache.middleware;
const workoutController = require('../controllers/ticketController');

router.get('/', cache("2 minutes"), workoutController.getAllTickets);

router.get('/:id', workoutController.getTicketById);

router.post('/', workoutController.createTicket);

router.patch('/:id', workoutController.updateTicket);

router.delete('/:id', workoutController.deleteTicket);

module.exports = router;