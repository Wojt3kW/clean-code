/* eslint-disable no-magic-numbers */

// staraj się używać obiektów, których stan nie zmienia się po ich utworzeniu
// niezmienność, niezmienialności, niemutowalności (immutability) obiektów
// niezmienialny obiekt to taki, który raz zainicjalizowany nie zmieni swojego stanu

interface IDbConfigMutable {
  hostName: string;
  portNumber: number;
  dbName: string;
}

class DbConfigMutable implements IDbConfigMutable {
  public hostName: string;
  public portNumber: number;
  public dbName: string;

  public constructor(host: string, port: number, db: string) {
    this.hostName = host;
    this.portNumber = port;
    this.dbName = db;
  }
}

export class MutableExample {
  public getDbConfig(): DbConfigMutable {
    const config = new DbConfigMutable('localhost', 3306, 'myDb');
    config.dbName = 'otherDb';
    return config;
  }

  public setArray(): void {
    let array = [1, 2, 3];
    array.push(4);
    array = [];
    array.push(2);
    array.length = 0;
    console.log(array);
  }

  public setArguments(args: string[]): void {
    args.push('new element');
    args[0] = 'new value';
  }
}

interface IDbConfigImmutable {
  readonly hostName: string;
  readonly portNumber: number;
  readonly dbName: string;
}

class DbConfigImmutable implements IDbConfigImmutable {
  public constructor(
    public readonly hostName: string,
    public readonly portNumber: number,
    public readonly dbName: string,
  ) {}
}

export class ImmutableExample {
  public getConfig(): DbConfigImmutable {
    const config = new DbConfigImmutable('localhost', 3306, 'myDb');
    config.dbName = 'otherDb'; // error - Cannot assign to 'db' because it is a read-only property
    return config;
  }

  public setArray(): void {
    const array: readonly number[] = [1, 2, 3];
    array = []; // error - Cannot assign to 'array' because it is a read-only property
    array.push(100); // error - Property 'push' does not exist on type 'readonly number[]'
    console.log(array);
  }

  public setArguments(args: readonly string[]): void {
    args.push('new element'); // error - Property 'push' does not exist on type 'readonly string[]'
    args[0] = 'new value'; // error - Index signature in type 'readonly string[]' only permits reading
    console.log(args);
  }
}

const immutableExample = new ImmutableExample();
console.log(immutableExample.getConfig());
immutableExample.setArray();
immutableExample.setArguments(['one', 'two', 'three']);
