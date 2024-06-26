/* eslint-disable no-magic-numbers */

// staraj się używać obiektów, których stan nie zmienia się po ich utworzeniu
// niezmienność, niezmienialności, niemutowalności (immutability) obiektów
// niezmienialny obiekt to taki, który raz zainicjalizowany nie zmieni swojego stanu

export class NotConstantValues {
  public notConstantObject(): void {
    const config = {
      address: 'domain.com',
    };

    config.address = 'new-domain.com'; // value is changed
    console.log(config);
  }

  public notConstantArray(): void {
    const array = [1, 2, 3];
    array.push(4); // array is changed
    array[0] = 10; // value is changed
    console.log(array);
  }

  public notConstantResult(): void {
    const result = this.getReadonlyData(100);
    result.value = 200; // value is changed
    console.log(result);
  }

  // writable objects is returned
  private getReadonlyData(value: number): { value: number } {
    return { value };
  }
}

export class ConstantValues {
  public constantObject(): void {
    const config = {
      address: 'domain.com',
    } as const;

    config.address = 'new-domain.com'; // error - Cannot assign to 'address' because it is a read-only property
    console.log(config);
  }

  public constantArray(): void {
    const array = [1, 2, 3] as const;

    array.push(4); // error - Property 'push' does not exist on type 'readonly number[]'
    array[0] = 10; // error - Cannot assign to '0' because it is a read-only property
    array = []; // error - Cannot assign to 'array' because it is a constant
    console.log(array);
  }

  public constantResult(): void {
    const result = this.getReadonlyData(100);
    result.value = 200; // error - Cannot assign to 'value' because it is a read-only property
    console.log(result);
  }

  private getReadonlyData(value: number): { readonly value: number } {
    return { value } as const;
  }
}
