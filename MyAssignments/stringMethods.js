const { reverse } = require("dns")

let companyName = "Testleaf"

let reversed=""
function reverseString() {
   for (let i = companyName.length-1; i >=0; i--) {
    
  reversed += companyName[i]
} 
console.log(reversed);
}

//reverseString()


function checkTicketAvailablity(availablity,callBookTicket) {
    console.log("checking for ticket availablity");

    setTimeout(() => {
        if (availablity) {
            console.log("The Ticket is available: Yes " + availablity);
            callBookTicket();
        } else {
            console.log(`The Ticket is available: No ${availablity}`);
            }
    }, 2000);
    
}

function bookTicket() {
    console.log("Ticket Booking is done");
    
}

checkTicketAvailablity(false,bookTicket)