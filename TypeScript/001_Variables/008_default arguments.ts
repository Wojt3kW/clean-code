// Parametry opcjonalne
// Używaj domyślnych parametrów zamiast warunków czy parametrów opcjonalnych

export abstract class BadNames {
  public constructor() {
    this.loadPages();
  }

  private loadPages(count?: number): void {
    const loadCount = count !== undefined ? count : 10;
    console?.log(`Loading ${loadCount} pages`);
  }
}

export abstract class GoodNames {
  private readonly DEFAULT_PAGES_COUNT = 10;

  public constructor() {
    this.loadPages();
  }

  private loadPages(count: number = this.DEFAULT_PAGES_COUNT): void {
    console?.log(`Loading ${count} pages`);
  }
}
