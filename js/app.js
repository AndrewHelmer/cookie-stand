'use strict';
// create 3 object literals for time, cookies, and place
// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array... perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this:

//Time variable
var time =['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm','8pm'];

//The Cities
var pike = {
  minP : 23,
  maxP : 65,
  avgP: 6.3,
};

var seaTac= {
  minP: 3,
  maxP: 24,
  avgP: 1.2,
};

var seaC= {
  minP: 11,
  maxP: 38,
  avgP: 3.7,
};

var capHill={
  minP: 20,
  maxP: 38,
  avgP: 2.3,
};

var alki={
  minP: 2,
  maxP: 16,
  avgP: 4.6,
};
// Pike
function pikeCustomers(min, max) {
  min = Math.ceil(pike.minP);
  max = Math.floor(pike.maxP);
  return Math.floor(Math.random() * (max - min)) + min;
}
function pikeCookies(){
  return Math.floor(pikeCustomers() * pike.avgP);
}


// Seattle Tacoma
function seaTacCustomers(min, max) {
  min = Math.ceil(seaTac.minP);
  max = Math.floor(seaTac.maxP);
  return Math.floor(Math.random() * (max - min)) + min;
}
function seaTaccookies(){
  return Math.floor(seaTacCustomers() * seaTac.avgP);
}

// Seattle Center
function seaCCustomers(min, max) {
  min = Math.ceil(seaC.minP);
  max = Math.floor(seaC.maxP);
  return Math.floor(Math.random() * (max - min)) + min;
}
function seaCCookies(){
  return Math.floor(seaCCustomers() * seaC.avgP);
}

// capitol hill functions
function capHillCustomers(min, max) {
  min = Math.ceil(capHill.minP);
  max = Math.floor(capHill.maxP);
  return Math.floor(Math.random() * (max - min)) + min;
}
function capHillCookies(){
  return Math.floor(capHillCustomers() * capHill.avgP);
}

//alki functions
function alkiCustomers(min, max) {
  min = Math.ceil(alki.minP);
  max = Math.floor(alki.maxP);
  return Math.floor(Math.random() * (max - min)) + min;
}
function alkiCookies(){
  return Math.floor(alkiCustomers() * alki.avgP);
}

// time functions
function pikeTime() {
  var firstAndPike = document.getElementById('1stAndPike');
  var total = 0;
  for(var i = 0; i < time.length; i++){
    var pikeEl = document.createElement('li');
    var randomNum = pikeCookies();
    pikeEl.textContent = '1st and Pike had ' + pikeCookies() + ' cookies at '+ time[i] + '.';
    total += randomNum;
    firstAndPike.appendChild(pikeEl);
  }
  var totalCookies = document.createElement('li');
  totalCookies.textContent = 'Total number of cookies at 1st and Pike is ' + total;
  firstAndPike.appendChild(totalCookies);
}



//running functions for cookies total
pikeCookies();
seaTaccookies();
seaCCookies();
capHillCookies();
alkiCookies();
// time functions and DOM element
pikeTime();