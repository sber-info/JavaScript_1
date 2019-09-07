var car = {
   make: "Audi",
   model: "A5",
   year: 2015,
   color: "red",
   passengers: 2,
   power: 225,
   odometer: 0
};
function haveRoadTrip(my_car, distance) {
   my_car.odometer += distance;
}
haveRoadTrip(car, 150);
console.log(car.odometer);

//task #1
function inObj(x) {
   let f = {};
   if (x > 999) {
      console.log('Число больше 999');
      return f;
   }
   f = {
      units: x % 10,
      dozents: Math.floor(x % 100 / 10),
      hundreds: Math.floor(x / 100)
   }
   return f;
}

var x = +prompt('Введите любое число в диапазоне 0-999:');
console.log(inObj(x));

//task #2
