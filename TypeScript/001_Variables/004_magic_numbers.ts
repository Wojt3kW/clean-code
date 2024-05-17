// Nie używaj ani magicznych liczb ani magicznych stringów (magic strings and magic numbers)

export abstract class BadNames {
  public constructor() {
    setTimeout(() => {
      this.restart();
    }, 86400000); // 86400000 = magic number
  }

  public calculateDiscount(price: number): number {
    if (price > 1000) { // 1000 = magic number
      return price * 0.9; // 0.9 = magic number
    }

    return price * 0.95; // 0.95 = magic number
  }

  protected abstract restart(): void;
}

export abstract class GoodNames {
  readonly MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000; // 86400000
  readonly DISCOUNT_THRESHOLD = 1000;
  readonly LARGER_DISCOUNT = 0.9;
  readonly SMALLER_DISCOUNT = 0.95;

  public constructor() {
    setTimeout(() => {
      this.restart();
    }, this.MILLISECONDS_PER_DAY);
  }

  public calculateDiscount(price: number): number {
    if (price > this.DISCOUNT_THRESHOLD) {
      return price * this.LARGER_DISCOUNT;
    }

    return price * this.SMALLER_DISCOUNT;
  }

  protected abstract restart(): void;
}

// grupowanie stałych w obiekcie
export const CONSTANTS = {
  MILLISECONDS_PER_DAY: 24 * 60 * 60 * 1000,
  DISCOUNT_THRESHOLD: 1000,
  LARGER_DISCOUNT: 0.9,
  SMALLER_DISCOUNT: 0.95,
};
