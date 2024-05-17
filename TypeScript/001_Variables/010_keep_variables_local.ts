// Zmienna zadeklarowana jako globalna
const users = ['Tom', 'Jerry'];

export function someFunctionUsingGlobalUsers(): void {
  for (const user of users) {
    console.log(user);
  }
}

// Zmienna zadeklarowana w miejscu użycia
export function someFunctionUsingUsers(): void {
  const users = ['Tom', 'Jerry'];
  for (const user of users) {
    console.log(user);
  }
}

export function someFunctionWithUnnecessaryAssignmentOfVariables(): void {
  let name: string = '';

  if (Math.random() === 1) {
    name = 'John';
  } else {
    name = 'Jane';
  }

  console.log(name);
}
