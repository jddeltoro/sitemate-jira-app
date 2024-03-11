const express = require('express');
const apicache = require('apicache');
const router = express.Router();
const cache = apicache.middleware;
const ticketController = require('../controllers/ticketController');

router.get('/', ticketController.getAllTickets);

router.get('/:id', ticketController.getTicketById);

router.post('/', ticketController.createTicket);

router.patch('/:id', ticketController.updateTicket);

router.delete('/:id', ticketController.deleteTicket);

module.exports = router;