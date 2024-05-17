// Nie przesadzaj z ilością parametrów funkcji

export class BadFunctions {
  public constructor() {
    this.setMenuItem('Home', 'red', 'white', '<icon=>');
  }

  private setMenuItem(caption: string, fontColor?: string, backgroundColor?: string, icon?: string): void {
    // ...
  }
}

interface IMenuItemOptions {
  caption: string,
  fontColor: string,
  backgroundColor: string,
  fontSize?: string,
  icon: string,
  iconColor?: string,
  iconBackgroundColor?: string,
  iconSize?: string,
  enabled: boolean,
  onClick?: () => void,
}

export class GoodFunctions {
  public constructor() {
    this.setMenuItem({
      caption: 'Home',
      icon: '<icon=>',
      fontColor: 'red',
      backgroundColor: 'white',
      enabled: true,
    } satisfies IMenuItemOptions);
  }

  private setMenuItem(menuOptions: IMenuItemOptions): void {
    // ...
  }
}
