// Używaj tego samego słownictwa dla tego samego typu zmiennej

interface IUser {
  id: number;
  name: string;
  email: string;
}

export abstract class BadNames {
  abstract getUserInfo(): IUser;
  abstract getUserDetails(): IUser;
  abstract getUserData(): IUser;
  abstract getUserRecord(): IUser;
  abstract getUserProfile(): IUser;
}

export abstract class GoodNames {
  abstract getUser(): IUser;
}

// Używaj spójnej wielkości liter
// Wielkie litery mówią wiele o zmiennych, funkcjach itp.
// Te zasady są subiektywne, więc Twój zespół może wybrać, co chce.
// Chodzi o to, że niezależnie od tego, co wybierzesz, po prostu bądź konsekwentny.

export class UserRepository {
  private readonly _users: IUser[] = [];

  public addUser(user: IUser): void {
    this._users.push(user);
  }

  public getUser(userId: number): IUser | undefined {
    return this._users.find((user) => user.id === userId);
  }
}

export function getUserName(user: IUser): string {
  return user.name;
}

export function sendEmailToUser(user: IUser): void {
  console.log(`Sending email to ${user.email}`);
}
