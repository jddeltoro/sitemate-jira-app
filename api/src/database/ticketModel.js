const DB = require("./db.json");
const {saveToDB} = require("../utils/util");

const getAllTickets = async () => {
    return DB.tickets;
};

const createTicket = async (ticket) => {
    const alreadyExists = DB.tickets.find(t => t.name === ticket.name);
    if (alreadyExists) {
        return {message: "Ticket already exists"};
    }
    DB.tickets.push(ticket);
    saveToDB(DB);
    return ticket;
};

const getTicketById = async (id) => {
    return DB.tickets.find(t => t.id === id);
};

const updateTicket = async (ticket, id) => {
    const index = DB.tickets.findIndex(w => w.id === id);
    if (index === -1) {
        return {message: "Ticket not found"};
    }
    DB.tickets[index] = ticket;
    saveToDB(DB);
    return ticket;
}

const deleteTicket = async (id) => {
    const index = DB.tickets.findIndex(w => w.id === id);
    if (index === -1) {
        return {message: "Ticket not found"};
    }
    DB.tickets.splice(index, 1);
    saveToDB(DB);
    return {message: "Ticket deleted"};
}



module.exports = {
    getAllTickets,
    createTicket,
    getTicketById,
    updateTicket,
    deleteTicket
};