/* eslint-disable no-magic-numbers */
// Unikaj tzw. efektu ubocznego działania funkcji
// Funkcja powinna zwracać wartość, a nie zmieniać wartości zmiennych poza swoim zakresem

export class BadFunctionWithSideEffect {
  private _name: string = 'Side effect';

  public getEncodedName(): string {
    this.toBase64();
    // od tej pory 'name' będzie miało nową wartość
    return this._name; // _name = 'Side effect' => _name = 'U2lkZSBlZmZlY3Q='
  }

  private toBase64(): void {
    this._name = btoa(this._name);
  }
}

export class GoodFunctionWithoutSideEffect {
  private readonly _name: string = 'Side effect';

  public getEncodedName(): string {
    const encodedName = this.toBase64(this._name);
    return encodedName;
  }

  private toBase64(text: string): string {
    return btoa(text);
  }
}

// Pure function
// Funkcja, która zawsze zwraca tę samą wartość dla tych samych argumentów
export class PureFunction {
  public add(a: number, b: number): number {
    return a + b;
  }
}

const pureFunction = new PureFunction();
console.log('PureFunction, 1+2=', pureFunction.add(1, 2)); // 3
console.log('PureFunction, 1+2=', pureFunction.add(1, 2)); // 3
console.log('PureFunction, 1+2=', pureFunction.add(1, 2)); // 3

// Impure function
// Funkcja, która zwraca różne wartości dla tych samych argumentów
export class ImpureFunction {
  private _result: number = 0;

  public add(a: number, b: number): number {
    return this._result++ + a + b;
  }
}

const impureFunction = new ImpureFunction();
console.log('ImpureFunction, 1+2=', impureFunction.add(1, 2)); // 3
console.log('ImpureFunction, 1+2=', impureFunction.add(1, 2)); // 4
console.log('ImpureFunction, 1+2=', impureFunction.add(1, 2)); // 5
