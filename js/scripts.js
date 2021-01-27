// business logic for ticket

function Ticket(moviePrice, timePrice, agePrice, totalPrice) {
  this.moviePrice= moviePrice;
  this.timePrice = timePrice;
  this.agePrice = agePrice;
  this.ticketPrice = "";
}



Ticket.prototype.sumPrice = function() {  
  
  let sumResult = (this.moviePrice + this.timePrice + this.agePrice)

  return sumResult
}

  //what if the movie they choose is in a #run or title option with a value so value of a new movie would be 15
  //value 

  //same

//   return
// }

// function (newMovie) {

// }