// Klasy powinny być jak najmniejsze i zawierać tylko jedną odpowiedzialność

class DashboardComplexClass {
  public getLanguage(): string { /* ... */ }
  public setLanguage(language: string): void { /* ... */ }
  public showProgress(): void { /* ... */ }
  public hideProgress(): void { /* ... */ }
  public isDirty(): boolean { /* ... */ }
  public disable(): void { /* ... */ }
  public enable(): void { /* ... */ }
  public addSubscription(subscription: Subscription): void { /* ... */ }
  public removeSubscription(subscription: Subscription): void { /* ... */ }
  public addUser(user: User): void { /* ... */ }
  public removeUser(user: User): void { /* ... */ }
  public goToHomePage(): void { /* ... */ }
  public updateProfile(details: UserDetails): void { /* ... */ }
  public getVersion(): string { /* ... */ }
  // ...
}

class DashboardTinyClass {
  public disable(): void { /* ... */ }
  public enable(): void { /* ... */ }
  public getVersion(): string { /* ... */ }
}
