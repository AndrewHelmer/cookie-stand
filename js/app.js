'use strict';

var timeTable =['6am-7am', '7am-8am', '8am-9am', '9am-10am', '10am-11am', '11am-12pm', '12pm-1pm', '1pm-2pm', '2pm-3pm', '3pm-4pm', '4pm-5pm', '5pm-6pm', '6pm-7pm','7pm-8pm',];
var allCities=[];
var totalAmountForAllCities = [];
var totalAmountEachHour=[];

var cookieBusiness = document.getElementById('cookieData');


function City(storeName,minP,maxP,avgP) {
  this.storeName=storeName;
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


City.prototype.customers = function(){
  for (var i =0; i < timeTable.length; i++ ){
    this.customersPerHour.push(Math.round(Math.random() * (this.maxP - this.minP)) + this.minP);
  }
};


City.prototype.cookies = function() {
  for (var i=0; i < timeTable.length; i++){
    this.cookiesPerHour.push(Math.round(this.customersPerHour[i] * this.avgP));
  }
};

City.prototype.total = function(){
  var cookieAmount = 0;
  for (var i=0; i < this.cookiesPerHour.length; i++ ){
    cookieAmount += this.cookiesPerHour[i];
  }
  return this.totalCookies.push(cookieAmount);
};


var testFunction = function (){
  for (var r=0; r < timeTable.length; r++) {

    var hourlyTotal = 0;
    for (var i=0; i < allCities.length; i++){

      hourlyTotal += allCities[i].cookiesPerHour[r];
    }
    totalAmountEachHour.push(hourlyTotal);
    console.log('-------------');
  }
  console.log(totalAmountEachHour);

};



// start of table stuff
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

var pike = new City('1st and Pike',23,65,6.3);
var seaTac = new City('SeaTac Airport',3,24,1.2);
var seaC = new City ('Seattle Center',11,38,2.3);
var capHill = new City ('Capitol Hill',20,38,2.3);
var alki = new City ('Alki',2,16,4.6);



City.renderHeader = function(){
  var headerRow = document.createElement('tr');
  cookieBusiness.appendChild(headerRow);
  var noBox =document.createElement('th');
  headerRow.appendChild(noBox);
  for(var i=0; i < timeTable.length; i++) {
    var timeElement = document.createElement('th');
    timeElement.textContent = timeTable[i];
    headerRow.appendChild(timeElement);
  }
  var totalBox = document.createElement('th');
  totalBox.textContent = 'total';
  headerRow.appendChild(totalBox);
};
City.renderAllCities = function() {
  for(var i=0; i < allCities.length; i++) {
    allCities[i].renderRow();
  }
};

City.renderHeader();
City.renderAllCities();
testFunction();
// theCompleteTotal();


// console.log(pike);
// console.log('-------------------------');
// console.log(seaTac);
// console.log('-------------------------');
// console.log(seaC);
// console.log('-------------------------');
// console.log(capHill);
// console.log('-------------------------');
// console.log(alki);
// console.log(allCities);
// console.log(theCompleteTotal());