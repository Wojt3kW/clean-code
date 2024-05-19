// Nie używaj flag jako parametru funkcji

class FileStorage {
  public createEmptyFile(filePath: string): void {
    console.log(`Creating empty file: ${filePath}`);
  }
}

export class BadFunctionsWithFlags {
  private readonly _fileStorage: FileStorage;

  public constructor() {
    this._fileStorage = new FileStorage();
  }

  public createFile(fileName: string, useTemp: boolean): void {
    if (useTemp) {
      this._fileStorage.createEmptyFile(`./temp/${fileName}`);
    } else {
      this._fileStorage.createEmptyFile(`./${fileName}`);
    }
  }
}

export class GoodFunctionsWithoutFlags {
  private readonly _fileStorage: FileStorage;

  public constructor() {
    this._fileStorage = new FileStorage();
  }

  public createFile(fileName: string): void {
    this._fileStorage.createEmptyFile(`./${fileName}`);
  }

  public createTempFile(fileName: string): void {
    this._fileStorage.createEmptyFile(`./temp/${fileName}`);
  }
}
