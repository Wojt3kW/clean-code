// Unikaj mapowania w myślach

interface IUser {
  id: number;
  name: string;
  email: string;
}

enum SubscriptionType {
  Free,
  Premium,
}

interface IPayment {
  message: string;
  price: number;
}

export abstract class BaseClass {
  protected getUser(): IUser {
    return {
      id: 1,
      name: 'John',
      email: 'email@domain.com',
    } satisfies IUser;
  }

  protected getSubscription(): SubscriptionType {
    return SubscriptionType.Premium;
  }

  protected getPayment(user: IUser, subscription: SubscriptionType): IPayment {
    return {
      message: `Charging user ${user.name} for ${subscription}.`,
      price: 100,
    } satisfies IPayment;
  }
}

// klasa ze zmiennymi mapowanymi w myślach
export class ClassWithMentalNames extends BaseClass {
  public constructor() {
    super();

    const u = this.getUser();
    const s = this.getSubscription();
    const p = this.getPayment(u, s);
    console.log(p);
  }
}

// klasa ze zmiennymi o jasnych nazwach
export class ClassWithExplanatoryNames extends BaseClass {
  public constructor() {
    super();

    const user: IUser = this.getUser();
    const subscription: SubscriptionType = this.getSubscription();
    const payment: IPayment = this.getPayment(user, subscription);
    console.log(payment);
  }
}
