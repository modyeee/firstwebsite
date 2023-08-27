const car = {
  brand: "BMW",
  model: "M3CS",
  year: 2018,
  isAutomatic: true,
  features: ["GPS", "Bluetooth", "Backup Camera"],
  start: function() {
    console.log("Starting the car");
  },
  accelerate: function(speed) {
    console.log("Accelerating to 300kmh");
  }
}

console.log("Brand:", car.brand);
console.log("Model:", car.model);
console.log("Year:", car.year);
console.log("Is Automatic:", car.isAutomatic);
console.log("Features:", car.features);

car.start();
car.accelerate(300);