// Nie używaj flag jako parametru funkcji

class FileStorage {
  public create(name: string): void {
    // ...
  }
}

export class BadFunctionsWithFlags {
  private readonly fileStorage: FileStorage;

  public constructor() {
    this.fileStorage = new FileStorage();
  }

  public createFile(name: string, useTemp: boolean): void {
    if (useTemp) {
      this.fileStorage.create(`./temp/${name}`);
    } else {
      this.fileStorage.create(name);
    }
  }
}

export class GoodFunctionsWithoutFlags {
  private readonly fileStorage: FileStorage;

  public constructor() {
    this.fileStorage = new FileStorage();
  }

  public createFile(name: string): void {
    this.fileStorage.create(name);
  }

  public createTempFile(name: string): void {
    this.fileStorage.create(`./temp/${name}`);
  }
}
