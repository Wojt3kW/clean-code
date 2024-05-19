// unikaj sprawdzania typów

export class Location {
  public constructor(public name: string) {}
}

export class Bicycle {
  public ride(start: Location, end: Location): void {
    console.log(`Riding from ${start.name} to ${end.name}.`);
  }
}

export class Car {
  public drive(start: Location, end: Location): void {
    console.log(`Driving from ${start.name} to ${end.name}.`);
  }
}

export class Truck {
  public roll(start: Location, end: Location): void {
    console.log(`Rolling from ${start.name} to ${end.name}.`);
  }
}

type TVehicle = Bicycle | Car | Truck;

export class DriverWithTypeChecking {
  private readonly _currentLocation = new Location('my house');

  public travelToTexas(vehicle: TVehicle): void {
    const destination = new Location('texas');
    if (vehicle instanceof Bicycle) {
      vehicle.ride(this._currentLocation, destination);
    } else if (vehicle instanceof Car) {
      vehicle.drive(this._currentLocation, destination);
    } else if (vehicle instanceof Truck) {
      vehicle.roll(this._currentLocation, destination);
    }
  }
}

const badDriver = new DriverWithTypeChecking();
badDriver.travelToTexas(new Bicycle());
badDriver.travelToTexas(new Car());
badDriver.travelToTexas(new Truck());

// bez sprawdzania typów
// Wzorzec projektowy: Pełnomocnik (ang. Proxy Pattern)
export interface IMove { // subject
  move: (start: Location, end: Location) => void;
}

export class MovableBicycle extends Bicycle implements IMove {
  public move(start: Location, end: Location): void {
    super.ride(start, end);
  }
}

export class MovableCar extends Car implements IMove {
  public move(start: Location, end: Location): void {
    super.drive(start, end);
  }
}

export class MovableTruck extends Truck implements IMove {
  public move(start: Location, end: Location): void {
    super.roll(start, end);
  }
}

export class WithoutTypeChecking {
  private readonly _currentLocation = new Location('my house');

  public travelToTexas(vehicle: IMove): void {
    const destination = new Location('texas');
    vehicle.move(this._currentLocation, destination);
  }
}

// console.log('---');
// const goodDriver = new WithoutTypeChecking();
// goodDriver.travelToTexas(new MovableBicycle());
// goodDriver.travelToTexas(new MovableCar());
// goodDriver.travelToTexas(new MovableTruck());
