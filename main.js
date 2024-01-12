// Set the min attribute for date input fields to the current date
document.getElementById("check-in").min = new Date().toISOString().split("T")[0];
document.getElementById("check-out").min = new Date().toISOString().split("T")[0];

// Set the min attribute for time input fields to the current time
document.getElementById("check-in-time").min = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
document.getElementById("check-out-time").min = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

function validateHotelSelection(event) {
    // Check if any hotel is selected
    var citrushotelSelected = document.getElementsByName("hotel").checked;
    var citrusvillaSelected = document.getElementsByName("villa").checked;

    if (!citrushotelSelected && !citrusvilla-Selected) {
        // Display an alert message
        alert("Please select the hotel you stay in.");
    } 
    else {
        console.log("Hotel selection is valid.");
    }
}

function hotelselectionwas(){
    var waskaduwa = "Waskaduwa"; 
    localStorage.setItem("selected hotel", waskaduwa);
}

function hotelselectionhik(){
    var hikkaduwa = "Hikkaduwa";
    localStorage.setItem("selected hotel", hikkaduwa);
}

function hotelselectionstu(){
    var stu = "Steuart";
    localStorage.setItem("selected hotel", stu);
}

function selectvilavic(){
    var vic = "Victoria";
    localStorage.setItem("selected villa", vic);
}

function selectvilaamb(){
    var amb = "Labugolla";
    localStorage.setItem("selected villa", amb);
}
function validateCardNumber() {
    // Get the value of the card number input
    var cardNumber = document.getElementById("cardnum").value;

    // Check if the card number is empty
    if (cardNumber.trim() === "") {
        // Display an alert message
        alert("Please fill in the Card info in the field.");
    } else {
        console.log("Card number is valid:", cardNumber);
    }
}

//save check in time and date to local storage
function checkindate(){
    var checkin = document.getElementById("check-in").value;
    localStorage.setItem("checkin date", checkin);
}
function checkintime(){
    var checkintime = document.getElementById("check-in-time").value;
    localStorage.setItem("checkin time", checkintime);
}


function checkoutdate() {
    var checkout = document.getElementById("check-out").value;
    localStorage.setItem("checkout date", checkout);

    // Set the min attribute for check-in date to the selected checkout date
    document.getElementById("check-in").min = checkout;

    // Display the visit date (check-in and check-out)
    var findate = localStorage.getItem("checkin date");
    document.getElementById("visit").innerHTML = findate + " " + checkout;
}

function checkouttime(){
    var checkouttime = document.getElementById("check-out-time").value;
    localStorage.setItem("checkout time", checkouttime);
}
//save the room type to local storage
function roomtype(){
    var roomtype = document.getElementById("roomType").value;
    localStorage.setItem("room type", roomtype);
}

//save the number of rooms to local storage
function roomnumber(){
    var roomnumber = document.getElementById("numberofr").value;
    localStorage.setItem("number of rooms", roomnumber);
}
function adultnumber(){
    var adultnumber = document.getElementById("adults").value;
    localStorage.setItem("number of adults", adultnumber);
}
function childnumber(){
    var childnumber = document.getElementById("child").value;
    localStorage.setItem("number of children", childnumber);
}
function bedyes(){
var bed="Yes";
localStorage.setItem("extra beds", bed);
}
//calculations

function ref(){
var adultnumber = document.getElementById("adults").value;
    localStorage.setItem("number of adults", adultnumber);
var clientname = document.getElementById("clientname").value;
    localStorage.setItem("client name", clientname);
var roomtype = document.getElementById("roomType").value;
    localStorage.setItem("room type", roomtype);
var roomnumber = document.getElementById("numberofr").value;
    localStorage.setItem("number of rooms", roomnumber);
var roomtype =localStorage.getItem("room type");
var number =localStorage.getItem("number of rooms");

var extrabed =localStorage.getItem("bed");
    if(roomtype == "Single"){
        if(extrabed == "Yes"){
            var costs= 25000*number+8000;
        }else{
            var costs= 25000*number;
        }
    }else if(roomtype == "Double"){
        if(extrabed == "Yes"){
            var costs= 35000*number+8000;
        }else{
            var costs= 35000*number;
        }
    }else if(roomtype == "Triple"){
        if(extrabed == "Yes"){
            var costs= 45000*number+8000;
        }else{
            var costs= 45000*number;
        }
    }                          
    localStorage.setItem("Cost", costs);
    var curroom =number;
    document.getElementById("currentBooking").innerHTML=curroom;
    document.getElementById("currentCost").innerHTML=costs;
}

    function validateForm() {
        var cardNumber = document.getElementById('cardnum').value;
        var promoCode = document.getElementById('promoCode').value;

        if (cardNumber.trim() === '' && promoCode.trim() === '') {
            alert('Enter card number to proceed.');
            return false; // Prevent form submission
        }

        return true; // Allow form submission
    }


    function checkCardNumber() {
        var cardNumber = document.getElementById('cardnum').value;

        if (cardNumber.trim() === '') {
            alert('Enter card number to book your stay.');
            return false; // Prevent form submission
        }

        // Redirect to Confirmpage.html
        window.location.href = 'Confirmpage.html';

        return true; // Allow form submission
    }


    
function promo() {
    var code = document.getElementById("promoCode").value;
    localStorage.setItem("code", code);
    var finalcost = localStorage.getItem("Cost");

    if (code == "Promo123") {
        var costwithdis = finalcost * 0.05;
        var final = finalcost - costwithdis;
        localStorage.setItem("final cost with discount", final);

        document.getElementById("price").innerHTML = "LKR " + final + ".00";
    } else {
        document.getElementById("price").innerHTML = "LKR " + finalcost + ".00";
    }
}
   

function guideyes(){
    var guide="Yes";
    localStorage.setItem("guide", guide);
}
function adventurecheck(){
    var nationality=document.getElementById("Country").value;
    localStorage.setItem("Nationality", nationality);
    var advenadults =localStorage.getItem("number of adults");
    var advenchild =localStorage.getItem("number of children");
    var adventure = document.getElementById("divID").value;
    localStorage.setItem("adventure", adventure);
    var guidecheck =localStorage.getItem("guide");
    if(adventure == "Diving"){
        if(guidecheck == "Yes"){
            if(nationality == "SRI LANKAN"){
                var divadult =5000*advenadults+1000;
                var divchild =2000*advenchild+500;
            }
            else{
                var divadult =10000*advenadults+1000;
                var divchild =5000*advenchild+500;
            }
        }
        else
        {
            if(nationality == "SRI LANKAN"){
                var divadult =5000*advenadults;
                var divchild =2000*advenchild;
            }
            else{
                var divadult =10000*advenadults;
                var divchild =5000*advenchild;
            }
        }
    }
    else{

    }
    localStorage.setItem("number of adults", divadult);
    localStorage.setItem("number of children", divchild);

    var advencost =divadult+divchild;
    var finalcostt=parseInt(localStorage.getItem("Cost"))+advencost;
    
    localStorage.setItem("total cost", finalcostt);
    
    document.getElementById("currentCost").innerHTML='';
    document.getElementById("currentCost").innerHTML=finalcostt;  
}
function conf(){
window.location.href="Confirmpage.html";
}

function display() {
    // Retrieve data from localStorage
    var clientName = localStorage.getItem("client name");
    var checkInDate = localStorage.getItem("checkin date");
    var checkOutDate = localStorage.getItem("checkout date");
    var roomType = localStorage.getItem("room type");
    var numberOfRooms = localStorage.getItem("number of rooms");
    var numberOfAdults = localStorage.getItem("number of adults");
    var numberOfChildren = localStorage.getItem("0");
    var price = "LKR " + localStorage.getItem("Cost") + ".00";

    // Display the retrieved information in the confirmation page
    document.getElementById("clientname").innerHTML = clientName;
    document.getElementById("date").innerHTML = checkInDate;
    document.getElementById("out").innerHTML = checkOutDate;
    document.getElementById("type").innerHTML = roomType;
    document.getElementById("rooms").innerHTML = numberOfRooms;
    document.getElementById("adults").innerHTML = numberOfAdults;
    document.getElementById("children").innerHTML = numberOfChildren;
    document.getElementById("price").innerHTML = price;

    // Clear localStorage after displaying the information
    localStorage.clear();
}

// Initialize variables for tracking bookings
let currentBooking = {
    adventureName: "",
    details: "",
    cost: 0,
    date: ""
};

let overallBooking = {
    adventureName: "",
    details: "",
    cost: 0,
    date: ""
};

// Function to update the current booking details and cost
function updateCurrentBooking(adventureName, details, cost, date) {
    currentBooking.adventureName = adventureName;
    currentBooking.details = details;
    currentBooking.cost = cost;
    currentBooking.date = date;

    // Update and display the cost of the current booking
    document.getElementById("current-booking-cost").innerText = currentBooking.cost;
}

// Function to update the overall booking details and cost
function updateOverallBooking() {
    // Update the overall booking details and cost
    overallBooking.adventureName = currentBooking.adventureName;
    overallBooking.details = currentBooking.details;
    overallBooking.cost += currentBooking.cost;
    overallBooking.date = date;

    // Display the overall booking details, cost and date
    document.getElementById("overall-booking-details").innerText = overallBooking.details;
    document.getElementById("overall-booking-cost").innerText = overallBooking.cost;
    document.getElementById("overall-booking-date").innerText = overallBooking.date;

    // Reset current booking to blank
    currentBooking.adventureName = "";
    currentBooking.details = "";
    currentBooking.cost = 0;
    currentBooking.date = "";

    // Reset and display the cost of the current booking
    document.getElementById("current-booking-cost").innerText = currentBooking.cost;
}

function addToFavourite() {
    var bookingData = {
        hotel: document.querySelector('input[name="hotel"]:checked').value,
        villa: document.querySelector('input[name="villa"]:checked').value,
        title: document.getElementById("title").value,
        clientName: document.getElementById("clientname").value,
        checkInDate: document.getElementById("check-in").value,
        checkInTime: document.getElementById("check-in-time").value,
        checkOutDate: document.getElementById("check-out").value,
        checkOutTime: document.getElementById("check-out-time").value,
        roomtype: document.getElementById("roomType").value,
        wifi: document.getElementById("wifi").checked,
        poolView: document.getElementById("poolView").checked,
        gardenView: document.getElementById("gardenView").checked,
        numberOfRooms: document.getElementById("numberofr").value,
        numberOfAdults: document.getElementById("adults").value,
        numberOfChildren: document.getElementById("child").value,
        extraBed: document.querySelector('input[name="bed"]:checked').value,
        phoneNumber: document.getElementById("phoneNumber").value,
        email: document.getElementById("email").value,
        country: document.getElementById("Country").value,
        cardNumber: document.getElementById("cardnum").value,
        promoCode: document.getElementById("promoCode").value,
        loyaltyPoints: document.getElementById("loyaltyPoints").value,
    };

    // Check if there is existing data in local storage
    var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Add the new data to the array
    favorites.push(bookingData);

    // Save the updated array back to local storage
    localStorage.setItem("favorites", JSON.stringify(favorites));

    alert('Added to Favourites!');
}

// Set the min attribute for date input field to the current date
document.getElementById("date").min = new Date().toISOString().split("T")[0];

// Function to handle adventure booking
function bookAdventure() {
    // Retrieve selected adventure details
    const adventureName = document.getElementById("divID").value;
    const isDiving = adventureName.toLowerCase() === "diving";
    const isLocal = document.getElementById("Country").value === "SRI LANKAN";
    const hasGuide = document.querySelector('input[name="bed"]:checked') !== null;

    // Calculate adventure cost
    let adventureCost = 0;
    if (isDiving) {
        if (isLocal) {
            adventureCost = hasGuide ? 6000 : 5000;
        } else {
            adventureCost = hasGuide ? 10500 : 10000;
        }
    }

    // Update current booking details and cost
    updateCurrentBooking(adventureName, "Adventure Booking", adventureCost);

    // Display a message thanking the user for the booking
    showBookingPopup();

    // Update overall booking details and cost
    updateOverallBooking();
}


// Function to display a popup with booking information
function showBookingPopup() {
    // Retrieve customer details
    const title = document.querySelector('select[name="title"]').value;
    const fullName = document.getElementById("clientname").value;
    const date = document.getElementById("date").value;
    const numberOfAdults = document.getElementById("adults").value;
    const numberOfChildren = document.getElementById("child").value;

    // Construct the booking message
    const popupMessage = `Reservation recorded!\nHello ${title} ${fullName},\nThank you for your booking!\nYour Adventure is on: ${date}\nAdults: ${numberOfAdults}\nChildren: ${numberOfChildren}\n\nAdventure Details: \nAdventure: ${currentBooking.adventureName}\nDetails: ${currentBooking.details}\n\nTotal Cost: LKR ${currentBooking.cost}`;

    // Display the booking popup
    alert(popupMessage);

    // Reset and display the overall booking details and cost
    document.getElementById("overall-booking-details").innerText = overallBooking.details;
    document.getElementById("overall-booking-cost").innerText = overallBooking.cost;

        // Reset overall booking to blank
        overallBooking.adventureName = "";
        overallBooking.details = "";
        overallBooking.cost = 0;
}

// Function to initialize the page
function initializePage() {
    // Reset current and overall bookings to blank
    currentBooking.adventureName = "";
    currentBooking.details = "";
    currentBooking.cost = 0;
    currentBooking.date ="";

    overallBooking.adventureName = "";
    overallBooking.details = "";
    overallBooking.cost = 0;

    // Display the initial cost of the current booking
    document.getElementById("current-booking-cost").innerText = currentBooking.cost;

    // Display the initial details and cost of the overall booking
    document.getElementById("overall-booking-details").innerText = overallBooking.details;
    document.getElementById("overall-booking-cost").innerText = overallBooking.cost;
}

// Call the initializePage function when the page loads
window.onload = initializePage;
