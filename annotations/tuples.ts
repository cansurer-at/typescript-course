const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// we made tuples and made the array always gonna be string, boolean,number in terms of order

type Drink = [string, boolean, number] // no arrays has been created, we just defined tuples
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 30];
const tea: Drink = ["brown", false, 0];

// if you use tuples it is hard to understand the meaning of values
const carSpecs: [number, number] = [400, 3354];

// If you use object everything is clear!
const carStats = {
  horsepower:400,
  weight:3352
}

//because of that we will prefer to not use tuples generally


