// Używaj polimorfizmu zamiast instrukcji warunkowych if, switch-y, itp.
// Używaj polimorfizmu, aby zastąpić instrukcje warunkowe if, switch-e, itp., które zależą od typu obiektu.

enum AirPlaneType {
  Boeing777,
  AirForceOne,
  DreamLiner,
}

export class BadAltitudeCalculator {
  public getCruisingAltitude(type: AirPlaneType): number {
    switch (type) {
      case AirPlaneType.Boeing777:
        return this.getMaxAltitude(type) - this.getPassengerCount(type);
      case AirPlaneType.AirForceOne:
        return this.getMaxAltitude(type);
      case AirPlaneType.DreamLiner:
        return this.getMaxAltitude(type) - this.getFuelExpenditure(type);
      default:
        throw new Error('Not supported airplane type.');
    }
  }

  protected getPassengerCount(type: AirPlaneType): number {
    switch (type) {
      case AirPlaneType.Boeing777:
        return 300;
      case AirPlaneType.AirForceOne:
        return 200;
      case AirPlaneType.DreamLiner:
        return 250;
      default:
        throw new Error('Not supported airplane type.');
    }
  }

  protected getFuelExpenditure(type: AirPlaneType): number {
    switch (type) {
      case AirPlaneType.Boeing777:
        return 500;
      case AirPlaneType.AirForceOne:
        return 100;
      case AirPlaneType.DreamLiner:
        return 200;
      default:
        throw new Error('Not supported airplane type.');
    }
  }

  protected getMaxAltitude(type: AirPlaneType): number {
    switch (type) {
      case AirPlaneType.Boeing777:
        return 20000;
      case AirPlaneType.AirForceOne:
        return 25000;
      case AirPlaneType.DreamLiner:
        return 30000;
      default:
        throw new Error('Not supported airplane type.');
    }
  }
}

abstract class AirPlane {
  public abstract getCruisingAltitude(): number;

  protected abstract getPassengerCount(): number;
  protected abstract getFuelExpenditure(): number;
  protected abstract getMaxAltitude(): number;
}

export class Boeing777 extends AirPlane {
  public getCruisingAltitude(): number {
    return this.getMaxAltitude() - this.getPassengerCount();
  }

  protected override getPassengerCount(): number {
    return 300;
  }

  protected override getFuelExpenditure(): number {
    return 500;
  }

  protected override getMaxAltitude(): number {
    return 20000;
  }
}

export class AirForceOne extends AirPlane {
  public getCruisingAltitude(): number {
    return this.getMaxAltitude();
  }

  protected override getPassengerCount(): number {
    return 200;
  }

  protected override getFuelExpenditure(): number {
    return 100;
  }

  protected override getMaxAltitude(): number {
    return 25000;
  }
}

export class DreamLiner extends AirPlane {
  public getCruisingAltitude(): number {
    return this.getMaxAltitude() - this.getFuelExpenditure();
  }

  protected override getPassengerCount(): number {
    return 250;
  }

  protected override getFuelExpenditure(): number {
    return 200;
  }

  protected override getMaxAltitude(): number {
    return 30000;
  }
}

export class AirPlaneFactory {
  public static create(type: AirPlaneType): AirPlane {
    switch (type) {
      case AirPlaneType.Boeing777:
        return new Boeing777();
      case AirPlaneType.AirForceOne:
        return new AirForceOne();
      case AirPlaneType.DreamLiner:
        return new DreamLiner();
      default:
        throw new Error('Unknown airplane type.');
    }
  }
}

export class GoodAltitudeCalculator {
  public static calculate(type: AirPlaneType): number {
    const airPlane: AirPlane = AirPlaneFactory.create(type);
    return airPlane.getCruisingAltitude();
  }
}

// Użycie
const altitude = GoodAltitudeCalculator.calculate(AirPlaneType.Boeing777);
console?.log(altitude);
