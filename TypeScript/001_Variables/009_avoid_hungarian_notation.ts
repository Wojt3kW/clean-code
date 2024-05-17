// Notacja węgierska dodaje typ zmiennej do jej nazwy.
// Jest to przestarzała praktyka, ponieważ większość języków programowania jest silnie typowana,
// a zatem typ zmiennej jest określany na podstawie wartości przypisanej do zmiennej.
// W związku z tym nie ma potrzeby dodawania typu zmiennej do jej nazwy

class UserWithBadProperties {
  private _sEmail: string;
  public sName: string;
  public dBirthDay: Date;
  public bIsAdult: boolean;

  public setEmail(sEmail: string): void {
    this._sEmail = sEmail;
  }
}

const badUser = new UserWithBadProperties();
badUser.sName = 'John';

class UserWithGoodProperties {
  private _email: string;
  public name: string;
  public birthDay: Date;
  public isAdult: boolean;

  public setEmail(email: string): void {
    this._email = email;
  }
}

const goodUser = new UserWithGoodProperties();
goodUser.name = 'John';
