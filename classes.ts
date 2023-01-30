class Vehicle {
  //Always capitalize the name of class

  // one way initialize variable in class
  //color: string = "red";

  // If we want to pass any argument into class we need to call constructor

  constructor( public color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle('orange');

class Car extends Vehicle {
  //extends take all keys from related class and paste  into new class which is Car
  //we can reassign with different duties(overwritten below)
  private drive(): void {
    console.log("vromm");
  }

  startDrivingProcess(): void {
    this.drive();
    
  }
}

//create instance of car

const car = new Car();
car.startDrivingProcess();


//Differences between ES2015 classes and classes in typescript 

// Modifiers =>
// public : This method can be called any where, any time.
// private : This method can be only called by another methods in this in this classes
// protected : This method can be called by other methods in this class, or by other methods in child classes  