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
  maxP :65,
  avgP: 6.3,
};

var seaTac= {
  minP: 3,
  maxP: 24,
  avgP:1.2,
};

var seaC= {
  minP: 11,
  maxP: 38,
  avgP:3.7,
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

function pikeCustomers(min, max) {
  min = Math.ceil(pike.minP);
  max = Math.floor(pike.maxP);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function pikeCookies(){
  return Math.floor(pikeCustomers() * pike.avgP);
}



function seaTacCustomers(min, max) {
  min = Math.ceil(seaTac.minP);
  max = Math.floor(seaTac.maxP);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function seaTaccookies(){
  return Math.floor(seaTacCustomers() * seaTac.avgP);
}


function seaCCustomers(min, max) {
  min = Math.ceil(seaC.minP);
  max = Math.floor(seaC.maxP);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function seaCCookies(){
  return Math.floor(seaCCustomers() * seaC.avgP);
}




// capitol hill functions
function capHillCustomers(min, max) {
  min = Math.ceil(capHill.minP);
  max = Math.floor(capHill.maxP);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function capHillCookies(){
  return Math.floor(capHillCustomers() * capHill.avgP);
}

//alki functions
function alkiCustomers(min, max) {
  min = Math.ceil(alki.minP);
  max = Math.floor(alki.maxP);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function alkiCookies(){
  return Math.floor(alkiCustomers() * alki.avgP);
}


function pikeTime() {
  var firstAndPike = document.getElementById('1stAndPike');
  for(var i = 0; i < time.length; i++){
  // 1. make my list items -> document.createElement
    var pikeEl = document.createElement('li');

    // 2. use the miles to give the list items some content -> .textContent
    pikeEl.textContent = '1st and Pike had' + pikeCookies + 'at '+ this.time[i] + '.';

    // 3. display the list items in the browser -> interact with the DOM -> parentElement.appendChild(childElement)
    firstAndPike.appendChild(pikeEl);
  }
}



//running functions
// pikeCookies();
pikeCustomers();
// seaTacCustomers();
// seaTaccookies();
// seaCCustomers();
// seaCCookies();
// capHillCustomers();
// capHillCookies();
// alkiCustomers();
// alkiCookies();
pikeTime();