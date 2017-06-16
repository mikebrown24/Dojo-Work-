function VehicleConstructor(name, wheels, passengers, noise, speed){ //this is actually a class
    var self = this;
    var distance_travelled = 0;
    var updateDistanceTravelled = function(){
        distance_travelled = distance_travelled + speed
    }
    self.name = name;
    self.wheels = wheels;
    self.passengers = passengers;
    self.noise = noise;
    self.speed = speed;
    
    self.vehicleMakeNoise = function(){
        console.log(self.noise);
    }
    self.vehiclePickup = function(){
    if(self.passengers < 30)
    self.passengers = self.passengers + 1;
    }
    self.vehicleMove = function(){
        updateDistanceTravelled();
        self.vehicleMakeNoise();

    }
    self.vehicleCheckMiles = function(){
        console.log(distance_travelled);
    }
    
}
// var Bike = VehicleConstructor("Bike", 2, 2);
// vehicleMakeNoise("ring ring");
// vehicleMove();

// var Sedan = VehicleConstructor("Sedan", 4, 4);
// vehicleMakeNoise("honk honk");

var Bus = new VehicleConstructor("Bus", 4, 20, "beep beep", 80);

Bus.vehiclePickup();
console.log(Bus.passengers)

Bus.vehicleMove();
Bus.vehicleCheckMiles();

//VAR MAKES IT PRIVATE, SELF MAKES IT PUBLIC


