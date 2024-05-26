/* eslint-disable no-magic-numbers */
import { multiply } from './multiplication';

describe.each([
  [0, 0, 0],
  [10, 0, 0],
  [0, 10, 0],
  [2, 3, 6],
  [3, 2, 6],
  [-2, 3, -6],
  [2, -3, -6],
  [-2, -3, 6],
])('.multiply(%i, %i)', (a, b, expected) => {
  test(`returns ${expected}`, () => {
    // Arrange

    // Act
    const result = multiply(a, b);

    // Assert
    expect(result).toBe(expected);
  });
});
