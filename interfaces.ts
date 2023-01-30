interface Vehicle {
  //Capital for first letter every time
  name: string;
  year: Date;
  broken: boolean;
  //Also we can add functions
  summary(): string;

}


const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name:${this.name}`;
  },
};
const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary);
 
};


printVehicle(oldCivic);

// If we don not add the interface, we will repeat below part every time

//(vehicle: {
 // name: string;
 // year: number;
 // broken: boolean;
//}): void =>  


// ----------  BELOW WE IMPROVED------

interface Reportable {
  summary():  string;
  //summery return string
}


const oldCivic1 = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name:${this.name}`;
  }
};

const drink1 = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};
const printSummary = (item: Reportable): void => {
  console.log(item.summary);
};


printSummary(oldCivic);
printSummary(drink1);