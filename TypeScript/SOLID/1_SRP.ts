/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-magic-numbers */

// There should never be more than one reason for a class to change

interface IUser {
  getAuthToken: () => string;
}

/**
 * The UserSettings_BreaksSRP class breaks the Single Responsibility Principle (SRP) because it has multiple responsibilities:
 * 1. It manages user settings such as loadItemsPerPage, darkMode, showNotifications, and language.
 * 2. It verifies user credentials by calling the getAuthToken method of the IUser interface.
 *
 * By combining these responsibilities into a single class, UserSettings_BreaksSRP violates the SRP. This can lead to several issues:
 * 1. The class becomes harder to understand and maintain as it grows larger and more complex.
 * 2. Changes to one responsibility may inadvertently affect the other responsibility, leading to bugs and unintended behavior.
 * 3. Testing becomes more difficult as it is harder to isolate and test each responsibility independently.
 *
 * To adhere to the SRP, it is recommended to separate the responsibilities into separate classes. The UserSettings class demonstrates a better design that follows the SRP.
 * The UserSettings class is responsible for managing user settings, while the UserAuth class is responsible for verifying user credentials.
 */
export class UserSettings_BreaksSRP {
  public loadItemsPerPage: number = 10;
  public darkMode: boolean = false;
  public showNotifications: boolean = true;
  public language: string = 'en';

  public constructor(private readonly _user: IUser) {}

  public changeSettings(settings: UserSettings_BreaksSRP): void {
    if (!this.verifyCredentials()) {
      return;
    }

    this.loadItemsPerPage = settings.loadItemsPerPage;
    this.darkMode = settings.darkMode;
    this.showNotifications = settings.showNotifications;
    this.language = settings.language;
  }

  private verifyCredentials(): boolean {
    const token = this._user.getAuthToken();
    const tokenParts = token.split('.');
    const payload = JSON.parse(atob(tokenParts[1]));
    return payload.sessionId?.length > 0;
  }
}

/**
 * UserAuth class is responsible for verifying user credentials by reading and decoding the authentication token.
 * It has a single responsibility of handling user authentication and does not have any other responsibilities.
 *
 * UserSettings class is responsible for managing user settings such as items per page, dark mode, notifications, and language.
 * It also depends on the UserAuth class to verify user credentials before allowing changes to the settings.
 * It has a single responsibility of managing user settings and does not have any other responsibilities.
 *
 * Both classes adhere to the Single Responsibility Principle (SRP) by having a clear and single responsibility.
 * UserAuth class handles user authentication, while UserSettings class handles user settings management.
 * This separation of concerns makes the code more maintainable, testable, and easier to understand.
 */

class UserAuth {
  public constructor(private readonly _user: IUser) {}

  public verifyCredentials(): boolean {
    const token = this._user.getAuthToken();
    const { sessionId } = this.readDataFromToken(token);
    return (sessionId?.length ?? 0) > 0;
  }

  private readDataFromToken(token?: string): { userId: string | null; sessionId: string | null } {
    if (!((token?.length ?? 0) > 0)) {
      return { userId: null, sessionId: null };
    }

    const payload = this.getPayload(token!);
    return { userId: payload.id, sessionId: payload.sessionId };
  }

  private getPayload(token: string): Record<string, any> {
    const tokenParts = token.split('.');
    return JSON.parse(atob(tokenParts[1]))
  }
}

class UserSettings {
  public loadItemsPerPage: number = 10;
  public darkMode: boolean = false;
  public showNotifications: boolean = true;
  public language: string = 'en';

  private readonly _auth: UserAuth;

  public constructor(private readonly _user: IUser) {
    this._auth = new UserAuth(_user);
  }

  public changeSettings(settings: UserSettings): void {
    if (!this._auth.verifyCredentials()) {
      return;
    }

    this.loadItemsPerPage = settings.loadItemsPerPage;
    this.darkMode = settings.darkMode;
    this.showNotifications = settings.showNotifications;
    this.language = settings.language;
  }
}
