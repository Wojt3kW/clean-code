// Używaj domyślnych parametrów zamiast warunków czy parametrów opcjonalnych

export abstract class FunctionWithOptionalParameters {
  public constructor() {
    this.loadPages();
  }

  private loadPages(count?: number): void {
    const loadCount = count === undefined ? 10 : count;
    console.log(`Loading ${loadCount} pages`);
  }
}

export abstract class FunctionWithDefaultParameters {
  private readonly DEFAULT_PAGES_COUNT = 10;

  public constructor() {
    this.loadPages();
  }

  private loadPages(count: number = this.DEFAULT_PAGES_COUNT): void {
    console.log(`Loading ${count} pages`);
  }
}
