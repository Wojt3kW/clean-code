/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as fs from 'fs';

// Używaj zmiennych jasno określających ich przeznaczenie

// Przykład zmiennych z niejasnym przeznaczeniem
const b = fs.readFileSync('/path/bills.txt', 'utf8');
const cdt = new Date();
const cy = cdt.getFullYear();
const cm = cdt.getMonth();
const cd = cdt.getDay();
const anms = ['dog', 'cat', 'bear', 'wolf', 'lion'];
const clgs = ['Jack', 'Drake', 'Jill'];

// Przykład zmiennych z nazwami jasno określającymi ich przeznaczenie
const bills = fs.readFileSync('/path/bills.txt', 'utf8');
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDay();
const animals = ['dog', 'cat', 'bear', 'wolf', 'lion'];
const colleagues = ['Jack', 'Drake', 'Jill'];

interface IUser {
  id: number;
  name: string;
  email: string;
}

export class BadNames {
  private readonly _users: Map<number, IUser> = new Map<number, IUser>([
    [1, { id: 1, name: 'User 1', email: 'user1@email.com' } satisfies IUser],
    [2, { id: 2, name: 'User 2', email: 'user1@email.com' } satisfies IUser],
  ]);

  public constructor() {
    for (const keyValue of Array.from(this._users)) {
      console.log(keyValue);
    }
  }
}

export class GoodNames {
  private readonly _users: Map<number, IUser> = new Map<number, IUser>([
    [1, { id: 1, name: 'User 1', email: 'user1@email.com' } satisfies IUser],
    [2, { id: 2, name: 'User 2', email: 'user1@email.com' } satisfies IUser],
  ]);

  public constructor() {
    for (const [id, user] of this._users) {
      console.log('id=', id, 'user=', user);
    }
  }
}
