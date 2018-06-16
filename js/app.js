'use strict';
// global variables
var timeTable =['6am-7am', '7am-8am', '8am-9am', '9am-10am', '10am-11am', '11am-12pm', '12pm-1pm', '1pm-2pm', '2pm-3pm', '3pm-4pm', '4pm-5pm', '5pm-6pm', '6pm-7pm','7pm-8pm',];
var allCities=[];
var totalAmountEachHour=[];
// var totalAmountForAllCities = [];
var cookieBusiness = document.getElementById('cookieData');
var cookieForm = document.getElementById('The-cookie-form');

// object constructor
function City(storeName,minP,maxP,avgP) {
  this.storeName = storeName;
  this.minP = minP;
  this.maxP = maxP;
  this.avgP = avgP;
  this.customersPerHour = [];
  this.customers();
  this.cookiesPerHour = [];
  this.cookies();
  this.totalCookies = [];
  this.total();
  allCities.push(this);
}

// find out how many customers for one store over an hour
City.prototype.customers = function(){
  for (var i = 0; i < timeTable.length; i++ ){
    this.customersPerHour.push(Math.round(Math.random() * (this.maxP - this.minP)) + this.minP);
  }
};

// finding out cookies for an hour for 1 store
City.prototype.cookies = function() {
  for (var i = 0; i < timeTable.length; i++){
    this.cookiesPerHour.push(Math.round(this.customersPerHour[i] * this.avgP));
  }
};

// function to get the total cookie amount for 1 store
City.prototype.total = function(){
  var cookieAmount = 0;
  for (var i=0; i < this.cookiesPerHour.length; i++ ){
    cookieAmount += this.cookiesPerHour[i];
  }
  return this.totalCookies.push(cookieAmount);
};

// nested for loop for complete totals of every store per hour
var eachLocationsTotalCookies = function (){
  for (var r = 0; r < timeTable.length; r++) {

    var hourlyTotal = 0;
    for (var i = 0; i < allCities.length; i++){

      hourlyTotal += allCities[i].cookiesPerHour[r];
    }
    totalAmountEachHour.push(hourlyTotal);
    console.log('-------------');
  }
  console.log(totalAmountEachHour);

};

var everyOneOfThoseCookies = function(){
  var cookiesForAll = 0;
  for (var i = 0; i < totalAmountEachHour.length ; i++){

    cookiesForAll += totalAmountEachHour[i];
  }
  // totalAmountForAllCities.push(cookiesForAll);
  return cookiesForAll;
};


// creating variable for a row, data, and header
City.prototype.renderRow = function(){
  var trElement=document.createElement('tr');
  cookieBusiness.appendChild(trElement);
  var tdElement=document.createElement('td');
  cookieBusiness.appendChild(tdElement);
  var thElement=document.createElement('th');

  // store names
  thElement.textContent = this.storeName;
  trElement.appendChild(thElement);

  // cookies every hour
  for (var i = 0; i < timeTable.length; i++){

    tdElement = document.createElement('td');
    tdElement.textContent = this.cookiesPerHour[i];
    trElement.appendChild(tdElement);
  }
  //total amount of cookies
  tdElement = document.createElement('td');
  tdElement.textContent = this.totalCookies;
  trElement.appendChild(tdElement);

  //  using the dom to put it on html page
  cookieBusiness.appendChild(trElement);
};




// times across the top
City.renderHeader = function(){
  var headerRow = document.createElement('tr');
  cookieBusiness.appendChild(headerRow);
  var noBox = document.createElement('th');
  headerRow.appendChild(noBox);
  for(var i = 0; i < timeTable.length; i++) {
    var timeElement = document.createElement('th');
    timeElement.textContent = timeTable[i];
    headerRow.appendChild(timeElement);
  }
  var totalBox = document.createElement('th');
  totalBox.textContent = 'total';
  headerRow.appendChild(totalBox);
};

City.renderFooter = function (){
  var footerRow = document.createElement('tr');

  var totalsNameOnBar = document.createElement('th');
  totalsNameOnBar.textContent = 'Totals';
  footerRow.appendChild(totalsNameOnBar);

  for (var i =0; i < timeTable.length; i++){
    var totalElement = document.createElement('td');
    totalElement.textContent = totalAmountEachHour[i];
    footerRow.appendChild(totalElement);
  }

  var theLastBox = document.createElement('td');
  // theLastBox.textContent = totalAmountForAllCities[0];
  theLastBox.textContent = everyOneOfThoseCookies();
  footerRow.appendChild(theLastBox);


  cookieBusiness.appendChild(footerRow);

};

// putting all the cities info out
City.renderAllCities = function() {
  for(var i = 0; i < allCities.length; i++) {
    allCities[i].renderRow();
  }
};
// event function
City.addNewCity = function(event) {
  event.preventDefault();
  var nextCity = event.target.newStoreName.value;
  var newMinimumPeople = parseInt(event.target.newMinP.value);
  var newMaximumPeople = parseInt(event.target.newMaxP.value);
  var newAverageCookies = parseInt (event.target.newAvgP.value);
  totalAmountEachHour = [];
  new City(nextCity, newMinimumPeople, newMaximumPeople, newAverageCookies);
  cookieBusiness.textContent = '';

  City.renderHeader();
  City.renderAllCities();
  eachLocationsTotalCookies();
  everyOneOfThoseCookies();
  City.renderFooter();
};

// city variables
var pike = new City('1st and Pike', 23, 65, 6.3);
var seaTac = new City('SeaTac Airport', 3, 24, 1.2);
var seaC = new City ('Seattle Center', 11, 38, 2.3);
var capHill = new City ('Capitol Hill', 20, 38, 2.3);
var alki = new City ('Alki', 2, 16, 4.6);
cookieForm.addEventListener('submit', City.addNewCity);

// running functions
City.renderHeader();
City.renderAllCities();
eachLocationsTotalCookies();
everyOneOfThoseCookies();
City.renderFooter();




// console logs for each city variable I put in
console.log(pike);
console.log('-------------------------');
console.log(seaTac);
console.log('-------------------------');
console.log(seaC);
console.log('-------------------------');
console.log(capHill);
console.log('-------------------------');
console.log(alki);
console.log(allCities);
// console.log(theCompleteTotal());
// console.log(totalAmountForAllCities);
// console.log(cookiesForAll);