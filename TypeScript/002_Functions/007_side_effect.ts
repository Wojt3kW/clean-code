// Unikaj tzw. efektu ubocznego działania funkcji
// Funkcja powinna zwracać wartość, a nie zmieniać wartości zmiennych poza swoim zakresem

export class BadFunctionWithSideEffect {
  private name: string = 'Side effect';

  constructor() {
    this.toBase64();
    // od tej pory 'name' będzie miało nową wartość

    console.log(this.name); // 'Side effect' <-> 'U2lkZSBlZmZlY3Q='
  }

  private toBase64(): void {
    this.name = btoa(this.name);
  }
}

export class GoodFunctionWithoutSideEffect {
  private readonly name: string = 'Side effect';

  constructor() {
    const encodedName = this.toBase64(this.name);
    console.log(encodedName);
    console.log(this.name);
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

// Impure function
// Funkcja, która zwraca różne wartości dla tych samych argumentów
export class ImpureFunction {
  private _result: number = 0;

  public add(a: number, b: number): number {
    return this._result++ + a + b;
  }
}
