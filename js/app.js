'use strict';

var timeTable =['6am-7am', '7am-8am', '8am-9am', '9am-10am', '10am-11am', '11am-12pm', '12pm-1pm', '1pm-2pm', '2pm-3pm', '3pm-4pm', '4pm-5pm', '5pm-6pm', '6pm-7pm','7pm-8pm',];
function City(storeName,minP,maxP,avgP) {
  this.storeName=storeName;
  this.minP = minP;
  this.maxP = maxP;
  this.avgP = avgP;
  this.customersPerHour = [];
  this.customers();
  this.cookiesPerHour = [];
  this.cookies();
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