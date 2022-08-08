function ticketPrice (ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticketQuantity > 0 && ticketQuantity <= 100){
        const cost = ticketQuantity * first100Rate;
        return cost;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const cost = first100Price + restTicketPrice;
        return cost; 
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const cost = first100Price + second100Price + restTicketPrice;
        return cost;
    }
}

console.log(ticketPrice(202));