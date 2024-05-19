// Nie używaj magicznych liczb (magic numbers)

export class RestartWithMagicNumbers {
  public restart(): void {
    setTimeout(() => {
      console.log('Restarting...');
    }, 86400000); // 86400000 = magic number
  }
}

export class RestartWithoutMagicNumbers {
  readonly ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

  public restart(): void {
    setTimeout(() => {
      console.log('Restarting...');
    }, this.ONE_DAY_IN_MILLISECONDS);
  }
}

// grupowanie stałych w obiekcie
export const CONSTANTS = {
  ONE_DAY_IN_MILLISECONDS: 24 * 60 * 60 * 1000,
};

export class RestartWithConstants {
  public restart(): void {
    setTimeout(() => {
      console.log('Restarting...');
    }, CONSTANTS.ONE_DAY_IN_MILLISECONDS);
  }
}

export class DiscountCalculatorWithMagicNumbers {
  public calculate(price: number): number {
    if (price > 1000) { // 1000 = magic number
      return price * 0.9; // 0.9 = magic number
    }

    return price * 0.95; // 0.95 = magic number
  }
}

export class DiscountCalculatorWithoutMagicNumbers {
  readonly DISCOUNT_THRESHOLD = 1000;
  readonly LARGER_DISCOUNT = 0.9;
  readonly SMALLER_DISCOUNT = 0.95;

  public calculate(price: number): number {
    if (price > this.DISCOUNT_THRESHOLD) {
      return price * this.LARGER_DISCOUNT;
    }

    return price * this.SMALLER_DISCOUNT;
  }
}

// grupowanie stałych w obiekcie
const CALCULATOR_CONSTANTS = {
  DISCOUNT_THRESHOLD: 1000,
  LARGER_DISCOUNT: 0.9,
  SMALLER_DISCOUNT: 0.95,
};

export class DiscountCalculatorWithConstants {
  public calculate(price: number): number {
    if (price > CALCULATOR_CONSTANTS.DISCOUNT_THRESHOLD) {
      return price * CALCULATOR_CONSTANTS.LARGER_DISCOUNT;
    }

    return price * CALCULATOR_CONSTANTS.SMALLER_DISCOUNT;
  }
}
