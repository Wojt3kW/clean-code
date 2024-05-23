/* eslint-disable no-magic-numbers */

// Method Chaining, czyli łańcuchowanie metod,
// jest popularnym wzorcem w programowaniu,
// który umożliwia wywoływanie wielu metod jedna po drugiej na tym samym obiekcie.
// Poprawne zastosowanie tej techniki pozwala na tworzenie kodu,
// który jest nie tylko bardziej efektywny, ale także optymalnie skonstruowany.
// Dzięki temu możliwe jest zwracanie wartości bez konieczności tworzenia dodatkowych zmiennych.

class BadQueryBuilder {
  private _collection: string;
  private _pageNumber: number = 1;
  private _itemsPerPage: number = 100;
  private readonly _orderByFields: string[] = [];

  public from(collection: string): void {
    this._collection = collection;
  }

  public page(number: number, itemsPerPage: number = 100): void {
    this._pageNumber = number;
    this._itemsPerPage = itemsPerPage;
  }

  public orderBy(...fields: string[]): void {
    this._orderByFields.push(...fields.map((field) => `[${field}]`));
  }

  public build(): string {
    return `SELECT * FROM [${this._collection}]
            ORDER BY ${this._orderByFields.join(', ')}
            LIMIT ${this._itemsPerPage}
            OFFSET ${(this._pageNumber - 1) * this._itemsPerPage}`;
  }
}

const queryBuilder = new BadQueryBuilder();
queryBuilder.from('users');
queryBuilder.page(1, 100);
queryBuilder.orderBy('firstName', 'lastName');

console.log('BadQueryBuilder=', queryBuilder.build());

// Zamiast wywoływać metody na obiekcie QueryBuilder w osobnych liniach,
// możemy wywołać je w jednej linii, łańcuchując je razem.

class QueryBuilder {
  private _collection: string;
  private _pageNumber: number = 1;
  private _itemsPerPage: number = 100;
  private readonly _orderByFields: string[] = [];

  public from(collection: string): this {
    this._collection = collection;
    return this;
  }

  public page(number: number, itemsPerPage: number = 100): this {
    this._pageNumber = number;
    this._itemsPerPage = itemsPerPage;
    return this;
  }

  public orderBy(...fields: string[]): this {
    this._orderByFields.push(...fields.map((field) => `[${field}]`));
    return this;
  }

  public build(): string {
    return `SELECT * FROM [${this._collection}]
            ORDER BY ${this._orderByFields.join(', ')}
            LIMIT ${this._itemsPerPage}
            OFFSET ${(this._pageNumber - 1) * this._itemsPerPage}`;
  }
}

const query = new QueryBuilder()
  .from('users')
  .page(1, 100)
  .orderBy('firstName', 'lastName')
  .build();

console.log('ChainQueryBuilder=', query);
