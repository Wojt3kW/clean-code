// Używaj jasnych, czytelnych i jednoznacznych nazw zmiennych, funkcji, klas, itp.
// Wybieraj nazwy w taki sposób, aby czytelnik wiedział, czym się różnią

export class BadNames {
  public between<T>(a1: T, a2: T, a3: T): boolean {
    return a2 <= a1 && a1 <= a3;
  }
}

export class GoodNames {
  public isBetween<T>(value: T, left: T, right: T): boolean {
    return left <= value && value <= right;
  }
}
