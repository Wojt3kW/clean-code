/* eslint-disable @typescript-eslint/no-unused-vars */
// Nie przesadzaj z ilością parametrów funkcji

export class BadFunctions {
  public constructor() {
    this.setMenuItem('Home', 'red', 'white', '<icon=>');
  }

  private setMenuItem(caption: string, fontColor: string, backgroundColor: string, icon: string): void {
    // ...
  }
}

export class GoodFunctions {
  public constructor() {
    this.setMenuItem({
      caption: 'Home',
      fontColor: 'red',
      backgroundColor: 'white',
      icon: '<icon=>',
      enabled: true,
    });
  }

  private setMenuItem(menu: {
    caption: string;
    fontColor: string;
    backgroundColor: string;
    icon: string;
    enabled: boolean;
  }): void {
    // ...
  }
}
