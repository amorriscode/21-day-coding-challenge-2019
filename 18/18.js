const countTickets = tickets => {
  const ticketCounts = {
    red: 0,
    green: 0,
    blue: 0,
  };
  
  tickets.forEach(ticket => ticketCounts[ticket] += 1);
  
  return ticketCounts;
}

const bestOdds = (tickets, raffleEntries) => {
  const ticketCounts = countTickets(tickets);
  let highestChance = { ticket: 'red', chance: 0 };
  
  Object.entries(ticketCounts).forEach(([ticket, count]) => {
    const chance = count / raffleEntries[ticket];

    if (chance > highestChance.chance) {
      highestChance = {
        ticket,
        chance,
      };
    }
  });
  
  return `You have the best odds of winning the ${highestChance.ticket} raffle.`;
}
