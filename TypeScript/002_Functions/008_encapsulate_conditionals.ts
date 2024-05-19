// Warunki trzymaj w osobnych funkcjach, które będą zwracać wartość logiczną.
// Dzięki temu kod będzie bardziej czytelny i łatwiejszy do zrozumienia.
class Subscription {
  public isTrial: boolean;
}

class Account {
  public balance: number;
}

export abstract class ActivatorBadConditions {
  public constructor(
    private readonly subscription: Subscription,
    private readonly account: Account,
  ) {
    if (subscription.isTrial || account.balance > 0) {
      // ...
    }
  }
}

export abstract class ActivatorGoodConditions {
  public constructor(
    readonly subscription: Subscription,
    readonly account: Account,
  ) {
    if (this.canActivateService(subscription, account)) {
      // ...
    }
  }

  private canActivateService(subscription: Subscription, account: Account): boolean {
    return subscription.isTrial || account.balance > 0;
  }
}
