/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-empty-interface */

// Używaj zamiennie typów i interfejsów

// Używaj typów gdy potrzebujesz powiązać różne typy za pomocą unii lub skrzyżowania
// Unia typów pozwala na zadeklarowanie nowego typu, który może być jednym z kilku innych typów
// Skrzyżowanie typów pozwala zadeklarować nowy typ, który jest połączeniem kilku innych typów

// Użyj interfejsów do definiowania kształtu obiektów

export function padLeft(value: string, padding: any): string {
  // narrowing czyli zawężanie typu zmiennej padding number
  // lub typeof type guards
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  if (typeof padding === 'string') {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

export function padLeftWithUnion(value: string, padding: string | number): string {
  // narrowing czyli zawężanie typu zmiennej padding number
  // lub typeof type guards
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  if (typeof padding === 'string') {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

interface IErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface IBlogPosts {
  posts: Array<{ title: string }>;
}

// typ powstały ze skrzyżowania dwóch innych typów
type TBlogPostsResponse = IBlogPosts & IErrorHandling;

export function getBlogPosts(): TBlogPostsResponse {
  return {
    success: true,
    posts: [{ title: 'Post 1' }, { title: 'Post 2' }],
  };
}

// przykład złego wykorzystania interfejsów
interface IEmailConfig {
  // ...
}

interface IDbConfig {
  // ...
}

// interfejs IConfig łączy w sobie dwa interfejsy IEmailConfig i IDbConfig
interface IConfig extends IEmailConfig, IDbConfig {
  // ...
}

interface IShape {
  // ...
}

type TShape = IShape;

// zamiast łączyć wiele interfejsów w jeden,
// lepiej jest stworzyć nowy typ z użyciem unii lub skrzyżowania
export type TConfig = IEmailConfig | IDbConfig;

// interfejs IShape nadaje kształt obiektom Circle i Square
export class Circle implements IShape {
  // ...
}

export class Square implements IShape {
  // ...
}
