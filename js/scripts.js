// // Busines Logic for Ticket

// function Ticket(moviePrice, movieTime, userAge) {
//   this.moviePrice = moviePrice;
//   this.movieTime = movieTime;
//   this.userAge = userAge;
// }

// // UI Logic
// let ticketPrice = new Ticket();

// business logic for ticket

function Ticket(moviePrice, timePrice, agePrice, totalPrice) {
  this.moviePrice = moviePrice;
  this.timePrice = timePrice;
  this.agePrice = agePrice;
  // this.ticketPrice = "";
}



Ticket.prototype.sumPrice = function() {  
  
  let sumResult = (this.moviePrice + this.timePrice + this.agePrice)

  return sumResult
}

 // UI logic
$(document).ready(function(){
  $("form#moviesForm").submit(function(e) {
    e.preventDefault();
    let moviePrice = parseInt($('#moviePrice').val());
    let timePrice = parseInt($('#timePrice').val());
    let agePrice = parseInt($('#agePrice').val());
    let ticketPrice = new Ticket(moviePrice, timePrice, agePrice);
    $("#show-price").show();
    $("#show-price").text(ticketPrice.sumPrice());

    });
});
