// niezmienność, niezmienialności, niemutowalności (immutability) obiektów
// niezmienialny obiekt to taki, który raz zainicjalizowany nie zmieni swojego stanu

interface IDbConfigMutable {
  host: string;
  port: string;
  db: string;
}

class DbConfigMutable implements IDbConfigMutable {
  host: string;
  port: string;
  db: string;

  constructor(host: string, port: string, db: string) {
    this.host = host;
    this.port = port;
    this.db = db;
  }
}

export class MutableExample {
  public getConfig(): DbConfigMutable {
    const config = new DbConfigMutable('localhost', '3306', 'myDb');
    config.db = 'otherDb';
    return config;
  }

  public mutableArray(): void {
    let array = [1, 2, 3];
    array.push(4);
    array = [];
    array.push(2);
    array.length = 0;
    console.log(array);
  }

  public mutableArguments(args: string[]): void {
    args.push('new element');
    args = [];
  }
}

interface IDbConfigImmutable {
  readonly host: string;
  readonly port: string;
  readonly db: string;
}

class DbConfigImmutable implements IDbConfigImmutable {
  constructor(
    public readonly host: string,
    public readonly port: string,
    public readonly db: string
  ) {}
}

export abstract class ImmutableExample {
  public getConfig(): DbConfigImmutable {
    const config = new DbConfigImmutable('localhost', '3306', 'myDb');
    // config.db = 'otherDb'; // error - Cannot assign to 'db' because it is a read-only property
    return config;
  }

  public immutableArray(): void {
    const array: readonly number[] = [1, 2, 3];
    // array = []; // error - Cannot assign to 'array' because it is a read-only property
    // array.push(100); // error - Property 'push' does not exist on type 'readonly number[]'
    console.log(array);
  }

  public immutableArguments(args: readonly string[]): void {
    // args.push('new element'); // error - Property 'push' does not exist on type 'readonly string[]'
    // args = []; // error - Cannot assign to 'args' because it is a read-only property
  }
}
