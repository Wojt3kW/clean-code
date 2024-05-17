// Unikaj negatywnych warunków

export abstract class BadNegativeConditionals {
  public abstract isEmailNotUsed(email: string): boolean;

  public abstract isNotLoggedIn(): boolean;

  public abstract isNotAuthorized(): boolean;

  public abstract isNotValidated(): boolean;

  public abstract isNotValid(): boolean;

  public abstract isNotActive(): boolean;

  public abstract isNotVisible(): boolean;

  public constructor() {
    const email = 'email@domain.com';
    if (this.isEmailNotUsed(email)) {
      // ...
    }
  }
}

export abstract class GoodConditionals {
  public abstract isEmailUsed(email: string): boolean;

  public abstract isLoggedIn(): boolean;

  public abstract isAuthorized(): boolean;

  public abstract isValidated(): boolean;

  public abstract isValid(): boolean;

  public abstract isActive(): boolean;

  public abstract isVisible(): boolean;

  public constructor() {
    const email = 'email@domain.com';
    if (this.isEmailUsed(email)) {
      // ...
    }
  }
}
