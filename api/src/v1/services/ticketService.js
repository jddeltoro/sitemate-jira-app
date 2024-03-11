const { v4: uuid } = require("uuid");
const Ticket = require("../../database/ticketModel");

const getAllTickets = async () => {
    const tickets = await Ticket.getAllTickets();
    return tickets;
};

const getTicketById = async (id) => {
    const ticket = await Ticket.getTicketById(id);
    return ticket;
};

const createTicket = async (newTicket) => {
    const ticket = {
        ...newTicket,
        id: uuid(),
        created_at : new Date().toLocaleString("en-US", {timeZone: "UTC"}),
        updated_at : new Date().toLocaleString("en-US", {timeZone: "UTC"}),
    };
    const createdTicket = await Ticket.createTicket(ticket);
    return createdTicket;
};

const updateTicket = async (body, id) => {
    const ticket = await Ticket.updateTicket(body, id);
    return ticket;
};

const deleteTicket = async (id) => {
    const ticket = await Ticket.deleteTicket(id);
    return ticket;
};

module.exports = {
    getAllTickets,
    getTicketById,
    createTicket,
    updateTicket,
    deleteTicket
};