/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/naming-convention */
import { between, isBetween } from './001_variable_names';
import './number.extensions';

describe('between', () => {
  it('should return true when value is between the given range', () => {
    // Arrange
    const a1 = 1;
    const a2 = 1;
    const a3 = 3;

    // Act
    const result = between(a1, a2, a3);

    // Assert
    expect(result).toBe(true);
  });

  it('should return false when value is outside the given range', () => {
    // Arrange
    const a1 = 4;
    const a2 = 1;
    const a3 = 3;

    // Act
    const result = between(a1, a2, a3);

    // Assert
    expect(result).toBe(false);
  });

  it('should work with string values', () => {
    // Arrange
    const a1 = 'a';
    const a2 = 'a';
    const a3 = 'z';

    // Act
    const result = between(a1, a2, a3);

    // Assert
    expect(result).toBe(true);
  });

  it('should return false when string value is outside the given range', () => {
    // Arrange
    const a1 = 'd';
    const a2 = 'a';
    const a3 = 'c';

    // Act
    const result = between(a1, a2, a3);

    // Assert
    expect(result).toBe(false);
  });
});

describe('isBetween', () => {
  it('should return true when value is between the given range', () => {
  // Arrange
    const value = 2;
    const left = 1;
    const right = 3;

    // Act
    const result = isBetween(value, left, right);

    // Assert
    expect(result).toBe(true);
  });

  it('should return false when value is outside the given range', () => {
  // Arrange
    const value = 4;
    const left = 1;
    const right = 3;

    // Act
    const result = isBetween(value, left, right);

    // Assert
    expect(result).toBe(false);
  });

  it('should work with string values', () => {
  // Arrange
    const value = 'b';
    const left = 'a';
    const right = 'z';

    // Act
    const result = isBetween(value, left, right);

    // Assert
    expect(result).toBe(true);
  });

  it('should return false when string value is outside the given range', () => {
  // Arrange
    const value = 'd';
    const left = 'a';
    const right = 'c';

    // Act
    const result = isBetween(value, left, right);

    // Assert
    expect(result).toBe(false);
  });
});

describe('isBetween extension method', () => {
  it('should return true when value is between the given range', () => {
    // Arrange
    const value = 1;

    // Act
    const result = value.isBetween(1, 3);

    // Assert
    expect(result).toBe(true);
  });

  it('should return false when value is outside the given range', () => {
    // Arrange
    const value = 4;

    // Act
    const result = value.isBetween(1, 3);

    // Assert
    expect(result).toBe(false);
  });
});
