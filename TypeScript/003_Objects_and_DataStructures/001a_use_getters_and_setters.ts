// Używaj getterów i setterów dla dostępu do danych obiektu
// zamiast bezpośredniego dostępu do właściwości obiektu
interface IPerson {
  age: number;
  firstName: string;
  lastName: string;
}

class PersonNoGetSet implements IPerson {
  public age: number;
  public firstName: string;
  public lastName: string;
}

export class ClassWithoutGetterAndSetter {
  public person: PersonNoGetSet;

  public constructor() {
    this.person = new PersonNoGetSet();
    this.person.age = -100;
  }
}

class Person implements IPerson {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  public get age(): number {
    return this._age;
  }

  public set age(newAge: number) {
    if (newAge <= 0 || newAge >= 200) {
      throw new Error('The age is invalid');
    }
    this._age = newAge;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(newFirstName: string) {
    if (!(newFirstName?.length > 0)) {
      throw new Error('Invalid first name.');
    }
    this._firstName = newFirstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(newLastName: string) {
    if (!(newLastName?.length > 0)) {
      throw new Error('Invalid last name.');
    }
    this._lastName = newLastName;
  }

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public set fullName(newFullName: string) {
    const parts = newFullName.split(' ');
    if (parts.length !== 2) {
      throw new Error('Invalid name format: first last');
    }
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

export class ClassWitGetterAndSetter {
  private _person: Person | null = null;

  // lazy initialization
  public get person(): Person {
    if (this._person == null) {
      this._person = new Person();
    }
    return this._person;
  }
}
