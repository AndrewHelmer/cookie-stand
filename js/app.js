'use strict';
// create 3 object literals for time, cookies, and place
// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array... perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this:

//Time variable
var time =['6am-7am', '7am-8am', '8am-9am', '9am-10am', '10am-11am', '11am-12pm', '12pm-1pm', '1pm-2pm', '2pm-3pm', '3pm-4pm', '4pm-5pm', '5pm-6pm', '6pm-7pm','7pm-8pm',];

//The Cities
var pike = {
  minP : 23,
  maxP : 65,
  avgP: 6.3,
  pikeCustomers: function(){
    // var min = Math.round(pike.minP);
    // var max = Math.round(pike.maxP);
    return Math.round(Math.random() * (pike.maxP - pike.minP + 1)) + pike.minP;

  },
  pikeCookies: function(){
    return Math.round(pike.pikeCustomers() * pike.avgP);
  },
  pikeTime: function(){
    var firstAndPike = document.getElementById('1stAndPike');
    var total = 0;
    for(var i = 0; i < time.length; i++){
      var pikeEl = document.createElement('li');
      var randomNum =pike.pikeCookies();
      pikeEl.textContent = '1st and Pike sold ' + randomNum + ' cookies from '+ time[i] + '.';
      total += randomNum;
      firstAndPike.appendChild(pikeEl);
    }
    var totalCookies = document.createElement('li');
    totalCookies.textContent = 'Total number of cookies sold at 1st and Pike is ' + total;
    firstAndPike.appendChild(totalCookies);
  }
};

var seaTac= {
  minP: 3,
  maxP: 24,
  avgP: 1.2,
  seaTacCustomers: function(){
    return Math.round(Math.random() * (seaTac.maxP - seaTac.minP+1)) + seaTac.minP;
  },
  seaTacCookies: function(){
    return Math.round(seaTac.seaTacCustomers() * seaTac.avgP);

  },
  seaTacTime: function(){
    var seattleTacAiport = document.getElementById('SeaTacAirport');
    var total = 0;
    for(var i = 0; i < time.length; i++){
      var seaTacEl = document.createElement('li');
      var randomNum =seaTac.seaTacCookies();
      seaTacEl.textContent = 'The SeaTac Airport sold ' + randomNum + ' cookies from '+ time[i] + '.';
      total += randomNum;
      seattleTacAiport.appendChild(seaTacEl);
    }
    var totalCookies = document.createElement('li');
    totalCookies.textContent = 'Total number of cookies sold at the Sea Tac airport is ' + total;
    seattleTacAiport.appendChild(totalCookies);
  },
};

var seaC= {
  minP: 11,
  maxP: 38,
  avgP: 3.7,
  seaCCustomers:function(){
    return Math.round(Math.random() * (seaC.maxP - seaC.minP)) + seaC.minP;
  },
  seaCCookies:function(){
    return Math.round(seaC.seaCCustomers() * seaC.avgP);
  },
  seaCTime: function(){
    var seattleCenter = document.getElementById('SeattleCenter');
    var total = 0;
    for(var i = 0; i < time.length; i++){
      var seaCentEl = document.createElement('li');
      var randomNum =seaC.seaCCookies();
      seaCentEl.textContent = 'The Seattle Center sold ' + randomNum + ' cookies from '+ time[i] + '.';
      total += randomNum;
      seattleCenter.appendChild(seaCentEl);
    }
    var totalCookies = document.createElement('li');
    totalCookies.textContent = 'Total number of cookies sold at the Seattle Center is ' + total;
    seattleCenter.appendChild(totalCookies);
  },
};

var capHill={
  minP: 20,
  maxP: 38,
  avgP: 2.3,
  capHillCustomers: function(){
    return Math.round(Math.random() * (capHill.maxP - capHill.minP)) + capHill.minP;
  },
  capHillCookies: function(){
    return Math.round(capHill.capHillCustomers() * capHill.avgP);
  },
  capHillTime:function(){
    var capitolHill = document.getElementById('CapitolHill');
    var total = 0;
    for(var i = 0; i < time.length; i++){
      var capHillEl = document.createElement('li');
      var randomNum =capHill.capHillCookies();
      capHillEl.textContent = 'Capitol sold ' + randomNum + ' cookies from '+ time[i] + '.';
      total += randomNum;
      capitolHill.appendChild(capHillEl);
    }
    var totalCookies = document.createElement('li');
    totalCookies.textContent = 'Total number of cookies sold at Capitol Hill is ' + total;
    capitolHill.appendChild(totalCookies);
  }
};

var alki={
  minP: 2,
  maxP: 16,
  avgP: 4.6,
  alkiCustomers:function() {
    return Math.round(Math.random() * (alki.maxP - alki.minP)) + alki.minP;
  },
  alkiCookies: function(){
    return Math.round(alki.alkiCustomers() * alki.avgP);
  },
  alkiTime: function(){
    var alkiAlki = document.getElementById('Alki');
    var total = 0;
    for(var i = 0; i < time.length; i++){
      var alkiEl = document.createElement('li');
      var randomNum =alki.alkiCookies();
      alkiEl.textContent = 'Alki sold ' + randomNum + ' cookies from '+ time[i] + '.';
      total += randomNum;
      alkiAlki.appendChild(alkiEl);
    }
    var totalCookies = document.createElement('li');
    totalCookies.textContent = 'Total number of cookies sold at Alki is ' + total;
    alkiAlki.appendChild(totalCookies);

  }

};
// Pike
// function pikeCustomers(min, max) {
//   min = Math.ceil(pike.minP);
//   max = Math.floor(pike.maxP);
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// function pikeCookies(){
//   return Math.floor(pikeCustomers() * pike.avgP);
// }


// Seattle Tacoma
// function seaTacCustomers(min, max) {
//   min = Math.ceil(seaTac.minP);
//   max = Math.floor(seaTac.maxP);
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// function seaTaccookies(){
//   return Math.floor(seaTacCustomers() * seaTac.avgP);
// }

// Seattle Center
// function seaCCustomers(min, max) {
//   min = Math.round(seaC.minP);
//   max = Math.round(seaC.maxP);
//   return Math.round(Math.random() * (max - min)) + min;
// }
// function seaCCookies(){
//   return Math.round(seaCCustomers() * seaC.avgP);
// }

// capitol hill functions
// function capHillCustomers(min, max) {
//   min = Math.round(capHill.minP);
//   max = Math.round(capHill.maxP);
//   return Math.round(Math.random() * (max - min)) + min;
// }
// function capHillCookies(){
//   return Math.round(capHillCustomers() * capHill.avgP);
// }

//alki functions
// function alkiCustomers(min, max) {
//   min = Math.round(alki.minP);
//   max = Math.round(alki.maxP);
//   return Math.round(Math.random() * (max - min)) + min;
// }
// function alkiCookies(){
//   return Math.round(alkiCustomers() * alki.avgP);
// }

// time functions
// function pikeTime() {
//   var firstAndPike = document.getElementById('1stAndPike');
//   var total = 0;
//   for(var i = 0; i < time.length; i++){
//     var pikeEl = document.createElement('li');
//     var randomNum = pikeCookies();
//     pikeEl.textContent = '1st and Pike had ' + pikeCookies() + ' cookies at '+ time[i] + '.';
//     total += randomNum;
//     firstAndPike.appendChild(pikeEl);
//   }
//   var totalCookies = document.createElement('li');
//   totalCookies.textContent = 'Total number of cookies at 1st and Pike is ' + total;
//   firstAndPike.appendChild(totalCookies);
// }



//running functions for cookies total
pike.pikeCookies();
seaTac.seaTacCookies();
seaC.seaCCookies();
capHill.capHillCookies();
alki.alkiCookies();
// time functions and DOM element
pike.pikeTime();
seaTac.seaTacTime();
seaC.seaCTime();
capHill.capHillTime();
alki.alkiTime();