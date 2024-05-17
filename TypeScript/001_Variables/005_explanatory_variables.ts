// Używaj zmiennych jasno określających ich przeznaczenie

interface IUser {
  id: number;
  name: string;
  email: string;
}

export class BadNames {
  // Map is a collection of elements where each element is stored as a <Key, Value> pair
  // Map<number, IUser> - key is number (user Id) and value is IUser
  readonly users: Map<number, IUser> = new Map<number, IUser>(
    [
      [1, { id: 1, name: 'User 1', email: 'user1@email.com' } satisfies IUser],
      [2, { id: 2, name: 'User 2', email: 'user1@email.com' } satisfies IUser],
    ]);

  public constructor() {
    for (const keyValue of Array.from(this.users)) {
      console?.log(keyValue);
    }
  }
}

export class GoodNames {
  // Map is a collection of elements where each element is stored as a <Key, Value> pair
  // Map<number, IUser> - key is number (user Id) and value is IUser
  readonly users: Map<number, IUser> = new Map<number, IUser>(
    [
      [1, { id: 1, name: 'User 1', email: 'user1@email.com' } satisfies IUser],
      [2, { id: 2, name: 'User 2', email: 'user1@email.com' } satisfies IUser],
    ]);

  public constructor() {
    for (const [id, user] of this.users) {
      console?.log('id=', id, 'user=', user);
    }
  }
}
