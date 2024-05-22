/* eslint-disable no-magic-numbers */

// Dobre praktyki programistyczne mówią, że zamiast dziedziczenia powinniśmy używać kompozycji.
// Jest wiele plusów korzystania z dziedziczenia, jest też wiele plusów korzystania z kompozycji.
// Co wybrać?
// Jest nam łatwiej i bardziej naturalnie korzystać z dziedziczenia.
// Jednak za każdym razem, gdy korzystamy z dziedziczenia, warto zastanowić się, czy nie lepiej byłoby użyć kompozycji.
// Czy kompozycja nie rozwiązałaby problemu lepiej?
// Dziedziczenie powinniśmy używać w relacji "jest" (is-a), a kompozycję w relacji "ma" (has-a).

class Employee1 {
  public readonly name: string;
  public readonly email: string;

  public constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

// Dziedziczenie w tym przypadku to złe rozwiązanie,
// ponieważ Employee "posiada" ("have") dane podatkowe (tak samo jak PESEL itp)
// a w tym przypadku EmployeeTaxData dziedziczy po Employee (złamana zasada "is-a")
class EmployeeTaxData1 extends Employee1 {
  public readonly taxPayerId: string;
  public readonly salary: number;

  public constructor(
    name: string,
    email: string,
    taxPayerId: string,
    salary: number,
  ) {
    super(name, email);
    this.taxPayerId = taxPayerId;
    this.salary = salary;
  }
}

// Kompozycja w tym przypadku to dobre rozwiązanie,
// ponieważ Employee "posiada" ("have") dane podatkowe (tak samo jak PESEL itp)

class EmployeeTaxData {
  public readonly taxPayerId: string;
  public readonly salary: number;

  public constructor(taxPayerId: string, salary: number) {
    this.taxPayerId = taxPayerId;
    this.salary = salary;
  }
}

class Employee {
  public readonly name: string;
  public readonly email: string;

  private _taxData: EmployeeTaxData;

  public constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  public setTaxData(taxPayerId: string, salary: number): this {
    this._taxData = new EmployeeTaxData(taxPayerId, salary);
    return this;
  }
}

const employee = new Employee('John Doe', 'johndoe@email.com');
employee.setTaxData('123-456-789', 1000);
