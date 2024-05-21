/* eslint-disable no-magic-numbers */

// hermetyzacja, inaczej również enkapsulacja,
// polega na ukrywaniu pewnych danych wewnątrz klasy,
// tak aby nie były one dostępne z zewnątrz
// i nie można było ich zmieniać bezpośrednio

export class ClassWithoutEncapsulation {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  surface(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class ClassWithEncapsulation {
  private readonly _radius: number;

  public constructor(radius: number) {
    this._radius = radius;
  }

  public perimeter(): number {
    return 2 * Math.PI * this._radius;
  }

  public surface(): number {
    return Math.PI * this._radius * this._radius;
  }
}
