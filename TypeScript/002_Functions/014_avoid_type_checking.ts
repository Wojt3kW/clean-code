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

type TVehicle = Bicycle | Car;

export class DriverWithTypeChecking {
  private readonly _currentLocation = new Location('my house');

  public travelToTexas(vehicle: TVehicle): void {
    const destination = new Location('texas');
    if (vehicle instanceof Bicycle) {
      vehicle.ride(this._currentLocation, destination);
    } else if (vehicle instanceof Car) {
      vehicle.drive(this._currentLocation, destination);
    }
  }
}

const badDriver = new DriverWithTypeChecking();
badDriver.travelToTexas(new Bicycle());
badDriver.travelToTexas(new Car());

// bez sprawdzania typów
export interface ICanMove {
  move: (start: Location, end: Location) => void;
}

export class MovableBicycle extends Bicycle implements ICanMove {
  public move(start: Location, end: Location): void {
    this.ride(start, end);
  }
}

export class MovableCar extends Car implements ICanMove {
  public move(start: Location, end: Location): void {
    this.drive(start, end);
  }
}

export class WithoutTypeChecking {
  private readonly _currentLocation = new Location('my house');

  public travelToTexas(vehicle: ICanMove): void {
    const destination = new Location('texas');
    vehicle.move(this._currentLocation, destination);
  }
}

const goodDriver = new WithoutTypeChecking();
goodDriver.travelToTexas(new MovableBicycle());
goodDriver.travelToTexas(new MovableCar());
