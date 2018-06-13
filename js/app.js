'use strict';

var timeTable =['6am-7am', '7am-8am', '8am-9am', '9am-10am', '10am-11am', '11am-12pm', '12pm-1pm', '1pm-2pm', '2pm-3pm', '3pm-4pm', '4pm-5pm', '5pm-6pm', '6pm-7pm','7pm-8pm',];
var allCities=[];
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

City.prototype.renderRow = function(){
  var trElement=document.getElementById('tr');
  var tdElement=document.getElementById('td');
  tdElement.textContent = City.this.storeName;

  trElement.appendChild(tdElement);

  tdElement = document.createElement('td');
  tdElement.textContent = City.this.minP;
  trElement.appendChild(tdElement);

  tdElement = document.createElement('td');
  tdElement.textContent = City.this.maxP;
  trElement.appendChild(tdElement);

  tdElement = document.createElement('td');
  tdElement.textContent = City.this.avgP;
  trElement.appendChild(tdElement);

  tdElement = document.createElement('td');
  tdElement.textContent = City.this.customersPerHour;
  trElement.appendChild(tdElement);

  tdElement = document.createElement('td');
  tdElement.textContent = City.this.cookiesPerHour;
  trElement.appendChild(tdElement);



  // append tr to table
  cookieBusiness.appendChild(trElement);


};
City.renderHeader = function() {
  // create a row
  var timesRow = document.createElement('tr');

  var timeTable =['6am-7am', '7am-8am', '8am-9am', '9am-10am', '10am-11am', '11am-12pm', '12pm-1pm', '1pm-2pm', '2pm-3pm', '3pm-4pm', '4pm-5pm', '5pm-6pm', '6pm-7pm','7pm-8pm',];

  for(var i=0; i < timeTable.length; i++) {
    var timeElement = document.createElement('th');
    timeElement.textContent = i;
    timesRow.appendChild(timeElement);
  }
  City.renderAllCities = function() {
    for(var i in allCities) {
      allCities[i].renderRow();
    }
  };
};


City.renderHeader();
City.renderAllCities();


var pike = new City('1st and Pike',23,65,6.3);
var seaTac = new City('SeaTac Airport',3,24,1.2);
var seaC = new City ('Seattle Center',11,38,2.3);
var capHill = new City ('Capitol Hill',20,38,2.3);
var alki = new City ('Alki',2,16,4.6);


console.log(pike);
console.log('-------------------------');
console.log(seaTac);
console.log('-------------------------');
console.log(seaC);
console.log('-------------------------');
console.log(capHill);
console.log('-------------------------');
console.log(alki);