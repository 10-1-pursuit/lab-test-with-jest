const getTicketByName = require('../src/tickets')
const calculateTotalFromTicketNames = require('../src/tickets'); 
const tickets = require('../data/tickets')

test('Get ticket by valid name', () => {
    const name = 'Adult Matinee';
    const ticket = getTicketByName(tickets, name);
    const expectedTicket = {
      id: '6ha0u__54',
      name: 'Adult Matinee',
      priceInCents: 949,
    };
    expect(ticket).toEqual(expectedTicket);
  });
  
  test('Get ticket by invalid name', () => {
    const name = 'Invalid Ticket Name';
    const ticket = getTicketByName(tickets, name);
    expect(ticket).toBeNull(); // The function should return null for invalid names
  });
  
  
  test('Calculate total for valid ticket names', () => {
    const names = ['Adult Matinee', 'Child Matinee'];
    const total = calculateTotalFromTicketNames(tickets, names);
    expect(total).toBe(1618); 
  });
  
  test('Calculate total for invalid ticket names', () => {
    const names = ['Invalid Name 1', 'Invalid Name 2'];
    const total = calculateTotalFromTicketNames(tickets, names);
    expect(total).toBe(0); 
  });
  


