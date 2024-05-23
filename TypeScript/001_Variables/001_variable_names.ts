/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-magic-numbers */
import './number.extensions';

// Używaj jasnych, czytelnych i jednoznacznych nazw zmiennych, funkcji, klas, itp.
// Wybieraj nazwy w taki sposób, abyś wiedział, co dany fragment kodu robi

export function between<T>(a1: T, a2: T, a3: T): boolean {
  return a2 <= a1 && a1 <= a3;
}

console.log(`between(1, 1, 3)=${between(1, 1, 3)}`);
console.log(`between(4, 1, 3)=${between(4, 1, 3)}`);
console.log(`between('a', 'a', 'z')=${between('a', 'a', 'z')}`);
console.log(`between('d', 'a', 'c')=${between('d', 'a', 'c')}`);

export function isBetween<T>(value: T, left: T, right: T): boolean {
  return left <= value && value <= right;
}

console.log(`isBetween(1, 1, 3)=${isBetween(1, 1, 3)}`);
console.log(`isBetween(4, 1, 3)=${isBetween(4, 1, 3)}`);
console.log(`isBetween('a', 'a', 'z')=${isBetween('a', 'a', 'z')}`);
console.log(`isBetween('d', 'a', 'c')=${isBetween('d', 'a', 'c')}`);

let value = 1;
let result = value.isBetween(1, 3);
console.log(`${value}.isBetween(1, 3)=${result}`);
value = 4;
result = value.isBetween(1, 3);
console.log(`${value}.isBetween(1, 3)=${result}`);
