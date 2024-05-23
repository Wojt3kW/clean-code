/* eslint-disable no-magic-numbers */

// instanceof type guard

interface IAccessory {
  brand: string;
}
class Necklace implements IAccessory {
  public readonly brand: string;
  public readonly kind: string;
  public constructor(brand: string, kind: string) {
    this.brand = brand;
    this.kind = kind;
  }
}
class Bracelet implements IAccessory {
  public readonly brand: string;
  public readonly year: number;
  public constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }
}

type TAccessory = Necklace | Bracelet;

const getRandomAccessory = (): TAccessory => {
  return Math.random() < 0.5
    ? new Bracelet('cartier', 2021)
    : new Necklace('choker', 'TASAKI');
};

const accessory: TAccessory = getRandomAccessory();

if (accessory instanceof Bracelet) {
  console.log(accessory.year);
}
if (accessory instanceof Necklace) {
  console.log(accessory.brand);
}

// typeof type guard

function printStudentId(studentId: string | number): void {
  // narrowing czyli zawężanie typu zmiennej studentId
  if (typeof studentId === 'string') {
    console.log(studentId);
  }
  if (typeof studentId === 'number') {
    console.log(studentId);
  }
  throw new Error(`Expected string or number, got '${typeof studentId}'.`);
}
printStudentId('446');
printStudentId(446);

// in type guard
interface IPupil {
  id: string;
}
interface IAdult {
  SSN: number;
}
interface IPerson {
  name: string;
  age: number;
}

function getIdentifier(person: IPupil | IAdult | IPerson): number | string {
  if ('name' in person) {
    return person.name;
  } else if ('id' in person) {
    return person.id;
  }
  return person.SSN;
}

const _person: IPupil | IAdult | IPerson = {
  name: 'Britney',
  age: 6,
};
console.log(getIdentifier(_person));

// is operator
interface ICat {
  meow: () => void;
}
interface IDog {
  bark: () => void;
}
type TPet = ICat | IDog;

function isCat(pet: TPet): pet is ICat {
  return (pet as ICat).meow !== undefined;
}

const dog: TPet = {
  bark: () => {
    console.log('bark');
  },
} satisfies IDog;

if (isCat(dog)) {
  dog.meow();
} else {
  dog.bark();
}
