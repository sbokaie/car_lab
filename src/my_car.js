function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.state = "off";
  this.previousOwners = [];
  this.currentOwner = "manufacturer";
  this.passengers = [];
}

Car.prototype.sale = function(newOwner){
  this.previousOwners.push(this.currentOwner);
  this.currentOwner = newOwner;
};


Car.prototype.paint = function(newColor){
  this.color = newColor;
};

Car.prototype.start = function(){
  this.state = "on";
};

Car.prototype.off = function(){
  this.state = "off";
};

Car.prototype.driveTo = function(destination){
  if(this.state === "on"){
    console.log("You are headed to" + destination);
  }else if(this.state === "off"){
    console.log("Turn the vehicle on");
  }
};

Car.prototype.park = function(){
  if(this.state === "off"){
    console.log("Parked!!");
  }
}

Car.prototype.pickUp = function(name){
  if(this.state === "on"){
    this.passengers.push(name);
    console.log("Driving to pick up" + name);
  }
};

Car.prototype.dropOff = function(name){
  if(this.state === "on"){
    this.passengers.pop(name);
    console.log("Dropped off" + name);
  }
};
 


