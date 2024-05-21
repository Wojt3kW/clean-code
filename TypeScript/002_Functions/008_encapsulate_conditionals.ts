/* eslint-disable @typescript-eslint/no-extraneous-class */

// Warunki trzymaj w osobnych funkcjach, które będą zwracać wartość logiczną.
// Dzięki temu kod będzie bardziej czytelny i łatwiejszy do zrozumienia.

class Subscription {
  public isTrial: boolean;
}

class Account {
  public balance: number;
}

export abstract class ServiceActivatorWithConditionals {
  public constructor(
    subscription: Subscription,
    account: Account,
  ) {
    if (subscription.isTrial || account.balance > 0) {
      // ...
    }
  }
}

export abstract class ServiceActivatorWithEncapsulatedConditionals {
  public constructor(
    subscription: Subscription,
    account: Account,
  ) {
    if (this.canActivate(subscription, account)) {
      // ...
    }
  }

  private canActivate(subscription: Subscription, account: Account): boolean {
    return subscription.isTrial || account.balance > 0;
  }
}

class User {
  private readonly _roles: string[] = ['admin'];

  public hasRole(role: string): boolean {
    return this._roles.includes(role);
  }
}

export class TextEditorWithConditionals {
  private readonly _user: User;

  public constructor(user: User) {
    this._user = user;
  }

  public isReadOnly(): boolean {
    if (this._user.hasRole('admin') || this._user.hasRole('editor') || this._user.hasRole('moderator')) {
      return false;
    }

    return true;
  }
}

export class TextEditorWithEncapsulatedConditionals {
  private readonly _user: User;

  public constructor(user: User) {
    this._user = user;
  }

  public isReadOnly(): boolean {
    return !this.userCanEditArticle(this._user);
  }

  private userCanEditArticle(user: User): boolean {
    return user.hasRole('admin') || user.hasRole('editor') || user.hasRole('moderator');
  }
}
