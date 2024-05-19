/* eslint-disable no-magic-numbers */
// Przedkładaj programowanie funkcyjne nad programowanie imperatywne

abstract class FunctionalStyleOverImperativeStyle {
  protected readonly numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public abstract calculateSum(): number;
  public abstract getOddNumbers(): number[];
  public abstract select8(): number | null;
}

// Imperatywny styl programowania:
// - opiera się na instrukcjach, które zmieniają stan programu
// - kolejność wykonywania jest ważna (step-by-step)
// - najczęściej wywołujemy jakieś funkcje, pętle, warunki
// - kod jest bardziej skomplikowany, trudniejszy do zrozumienia
export class ImperativeStyle extends FunctionalStyleOverImperativeStyle {
  public calculateSum(): number {
    let sum = 0;
    for (let i = 0; i < this.numbers.length; i++) {
      sum += this.numbers[i];
    }
    return sum;
  }

  public getOddNumbers(): number[] {
    const oddNumbers = [];

    for (let i = 0; i < this.numbers.length; i++) {
      if (this.numbers[i] % 2 !== 0) {
        oddNumbers.push(this.numbers[i]);
      }
    }

    return oddNumbers;
  }

  public select8(): number | null {
    let selected = null;

    for (let i = 0; i < this.numbers.length; i++) {
      if (this.numbers[i] > 5 &&
        this.numbers[i] % 2 === 0 &&
        this.numbers[i] < 9 &&
        this.numbers[i] * 2 > 15) {
        selected = this.numbers[i];
        break;
      }
    }

    return selected;
  }
}

// Funkcyjny styl programowania:
// - opiera się na funkcjach, które nie zmieniają stanu programu
// - zwracamy wartość w bezstanowy sposób
// - używamy funkcji patrząc na ich input/output
// - nie mamy efektów ubocznych
// - kod jest bardziej czytelny, łatwiejszy do zrozumienia
export class FunctionalStyle extends FunctionalStyleOverImperativeStyle {
  public calculateSum(): number {
    return this.numbers.reduce((sum, current) => sum + current, 0);
  }

  public getOddNumbers(): number[] {
    return this.numbers.filter(number => number % 2 !== 0);
  }

  public select8(): number | null {
    const filteredNumbers = this.numbers
      .filter(number => number > 5)
      .filter(number => number % 2 === 0)
      .filter(number => number < 9)
      .filter(number => number * 2 > 15);

    return filteredNumbers.length > 0 ? filteredNumbers[0] : null;
  }
}
