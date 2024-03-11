import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tickets, setTickets] = useState([]);
  const [ticketData, setTicketData] = useState({ name: '', description: '' });

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = () => {
    axios.get('http://localhost:3001/api/v1/tickets/')
      .then(response => {
        console.log('Tickets: ', response.data.data);
        setTickets(response.data.data); 
      })
      .catch(error => {
        console.error('Error fetching tickets: ', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTicketData({ ...ticketData, [name]: value });
  };

  const createTicket = () => {
    axios.post('http://localhost:3001/api/v1/tickets/', ticketData)
      .then(response => {
        fetchTickets();
        setTicketData({ name: '', description: '' });
      })
      .catch(error => {
        console.error('Error creating ticket: ', error);
      });
  };

  const updateTicket = (id) => {
    axios.patch(`http://localhost:3001/api/v1/tickets/${id}`, ticketData)
      .then(response => {
        fetchTickets();
        setTicketData({ name: '', description: '' });
      })
      .catch(error => {
        console.error('Error updating ticket: ', error);
      });
  };

  const deleteTicket = (id) => {
    axios.delete(`http://localhost:3001/api/v1/tickets/${id}`)
      .then(response => {
        fetchTickets();
      })
      .catch(error => {
        console.error('Error deleting ticket: ', error);
      });
  };

  return (
    <div>
      <h1>Tickets</h1>
      <div>
        <h2>Create Ticket</h2>
        <input type="text" name="name" placeholder="Name" value={ticketData.name} onChange={handleInputChange} />
        <input type="text" name="description" placeholder="Description" value={ticketData.description} onChange={handleInputChange} />
        <button onClick={createTicket}>Create</button>
      </div>
      <h2>All Tickets</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            {ticket.name} - {ticket.description}
            <button onClick={() => updateTicket(ticket.id)}>Update</button>
            <button onClick={() => deleteTicket(ticket.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
 

export default App;
