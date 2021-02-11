export function filterTicketsByField(key) {
  switch (key) {
    case 'transfer': {
      return tickets.filter(t => filters.transfer.includes(t.info.stops));
    }
    case 'price': {
      return tickets.filter(t => t.amount > filters.pric.min && t.amount < filters.pric.max);
    }
    case 'airlines': {
      return tickets.filter(t => filters.airlines.includes(t.caption))
    }
    default:
  }
}