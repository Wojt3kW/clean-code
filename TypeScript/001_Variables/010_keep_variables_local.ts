// Zmienna zadeklarowana jako globalna
const users = ['Tom', 'Jerry'];

export function functionUsingGlobalVariables(): void {
  for (const user of users) {
    console.log(user);
  }
}

// Zmienna zadeklarowana w miejscu użycia
export function functionUsingLocalVariables(): void {
  const users = ['Tom', 'Jerry'];
  for (const user of users) {
    console.log(user);
  }
}

export function functionWithUnnecessaryAssignmentOfVariable(): void {
  let name: string = '';

  if (Math.random() === 1) {
    name = 'John';
  } else {
    name = 'Jane';
  }

  console.log(name);
}

export function functionWithVariablesDeclaredAtTheBeginning(): void {
  const readFile = (_path: string): string[] => {
    return ['Name: John', 'Name: Jane', 'Name: Tom', 'Name: Jerry'];
  }
  const file = 'file.txt';
  const path = '/path/to/file';
  const fullPath = `${path}/${file}`;
  let fileContent: string[] = [];
  let firstLine = '';
  let name = '';

  fileContent = readFile(fullPath);
  firstLine = fileContent[0];
  name = firstLine.split(' ')[1];
  console.log(name);
}
