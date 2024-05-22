import fs from 'fs';
// Unikaj zbyt głębokiego zagnieżdżania
// Zbyt wiele instrukcji if else może sprawić, że kod będzie trudny do zrozumienia
// Zamiast tego użyj wczesnego zwracania

export class ShopWithDeepNesting {
  public isShopOpen(day: string): boolean {
    if (day !== null && day !== undefined) {
      day = day.toLowerCase();

      if (day === 'friday') {
        return true;
      } else if (day === 'saturday') {
        return true;
      } else if (day === 'sunday') {
        return true;
      }
      return false;
    }
    return false;
  }
}

export class ShopWithEarlyReturn {
  private readonly _openingDays = ['friday', 'saturday', 'sunday'];

  public isShopOpen(day: string): boolean {
    if (!(day?.length > 0)) {
      return false;
    }

    if (this._openingDays.includes(day.toLowerCase())) {
      return true;
    }

    return false;
  }
}

export class FileAccessWithDeepNesting {
  public isFileAccessible(pathToFile: string): boolean {
    if (pathToFile !== null && pathToFile !== undefined) {
      if (fs.existsSync(pathToFile)) {
        if (pathToFile.toLowerCase().endsWith('.txt')) {
          try {
            fs.accessSync(pathToFile);
            return true;
          } catch {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

export class FileAccessWithEarlyReturn {
  public isFileAccessible(pathToFile: string): boolean {
    if (!(pathToFile?.length > 0)) {
      return false;
    }

    if (!fs.existsSync(pathToFile)) {
      return false;
    }

    if (!pathToFile.toLowerCase().endsWith('.txt')) {
      return false;
    }

    try {
      fs.accessSync(pathToFile);
      return true;
    } catch {
      return false;
    }
  }
}
