const ticketService = require('../services/ticketService');

const getAllTickets = async (req, res) => {
    const tickets = await ticketService.getAllTickets();
    res.send({status: "OK", data: tickets});
};

const getTicketById = async (req, res) => {
    if (!req.params.id) {
        res.status(400).send({status: "ERROR", message: "Missing Ticket ID"});
        return;
    }
    const ticket = await ticketService.getTicketById(req.params.id);
    res.send({ status: "OK", data: ticket });
};

const createTicket = async (req, res) => {
    const {body} = req;
    let missingFields = ['name', 'description'].filter(field => !body[field]);

    if (missingFields.length) {
        res.status(400).send({
            status: "ERROR", 
            message: `Missing required fields, fields missing in the request: ${missingFields.join(', ')}`
        });
    }
    const ticketSeed = {
        name: body.name,
        mode: body.description,
    };
    const ticket = await ticketService.createTicket(ticketSeed);
    res.status(201).send({status: "OK", data: ticket});
};

const updateTicket = async (req, res) => {
    if (!req.params.id) {
        res.status(400).send({status: "ERROR", message: "Missing ticket ID"});
        return;
    }
    const {body} = req;
    const ticket = await ticketService.updateTicket(body, req.params.id);
    res.send({status: "OK", data: ticket})
};

const deleteTicket = async (req, res) => {
    if (!req.params.id) {
        res.status(400).send({status: "ERROR", message: "Missing ticket ID"});
        return;
    }
    const ticket = await ticketService.deleteTicket(req.params.id);
    res.status(204).send({status: "OK", data: ticket});
};

module.exports = {
    getAllTickets,
    getTicketById,
    createTicket,
    updateTicket,
    deleteTicket
};
