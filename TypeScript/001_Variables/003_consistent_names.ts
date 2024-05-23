/* eslint-disable no-magic-numbers */

// Używaj tego samego słownictwa dla tego samego typu zmiennej

interface IUser {
  id: number;
  name: string;
  email: string;
}

export abstract class BadNames {
  protected abstract getUserInfo(): IUser;
  protected abstract getUserDetails(): IUser;
  protected abstract getUserData(): IUser;
  protected abstract getUserRecord(): IUser;
  protected abstract getUserProfile(): IUser;
}

export abstract class GoodNames {
  protected abstract getUser(): IUser;
}

// Używaj spójnej wielkości liter
// Wielkie litery mówią wiele o zmiennych, funkcjach itp.
// Te zasady są subiektywne, więc Twój zespół może wybrać, co chce.
// Chodzi o to, że niezależnie od tego, co wybierzesz, po prostu bądź konsekwentny.

export enum UserStatus {
  Inactive = 0,
  Active = 1, // <-- przecinek na końcu 😊
}

export enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

export const MAX_USERS = 10;

export class Administrator implements IUser {
  public readonly id: number;
  public readonly name: string;
  public readonly email: string;
  public readonly status: UserStatus;

  public constructor(id: number, name: string, email: string, status: UserStatus) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.status = status;
  }
}

export class Moderator implements IUser {
  public readonly id: number;
  public readonly name: string;
  public readonly email: string;
  public readonly status: UserStatus;

  public constructor(id: number, name: string, email: string, status: UserStatus) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.status = status;
  }
}

type TUser = Administrator | Moderator;

export class UserRepository {
  private readonly _users: TUser[] = [];

  public addUser(user: TUser): void {
    this._users.push(user);
  }

  public getUser(userId: number): TUser | undefined {
    return this._users.find((user) => user.id === userId);
  }
}

export function getUserName(user: TUser): string | undefined {
  return user?.name;
}

export function sendEmailToUser(user: TUser): void {
  console.log(`Sending email to ${user.email}`);
}
