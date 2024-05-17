// Używaj nazw zmiennych możliwych do wymówienia
// Jeśli nie umiesz czegoś wymówić, nie możesz o tym dyskutować

interface DtaRcrd102 {
  rcrdint: number;
  crymdhms: Date;
  modymdhms: Date;
}

export class BadNames {
  private readonly _record: DtaRcrd102;
  public constructor(record: DtaRcrd102) {
    this._record = record;
  }
}

interface ICustomer {
  recordId: number;
  creationTimestamp: Date;
  modificationTimestamp: Date;
}

export class GoodNames {
  private readonly _customer: ICustomer;
  public constructor(customer: ICustomer) {
    this._customer = customer;
  }
}
