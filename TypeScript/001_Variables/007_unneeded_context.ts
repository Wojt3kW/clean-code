// Nie dodawaj niepotrzebnego kontekstu

interface ICarWithContext {
  carMake: string;
  carModel: string;
  carColor: string;
}

export abstract class BadNames {
  public print(car: ICarWithContext): void {
    console?.log(`${car.carMake} ${car.carModel} (${car.carColor})`);
  }
}

interface ICar {
  make: string;
  model: string;
  color: string;
}

export abstract class GoodNames {
  public print(car: ICar): void {
    console?.log(`${car.make} ${car.model} (${car.color})`);
  }
}

interface IOrderViewModel {
  orderId: number;
  orderTime: Date;
  orderQuantity: number;
  totalPrice: number;

  productId: number;
  productName: string;
  productPrice: number;

  customerId: number;
  customerName: string;
  customerEmail: string;
}
