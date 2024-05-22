/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-empty-interface */

// Używaj zamiennie typów i interfejsów

// Używaj typów gdy potrzebujesz powiązać różne typy za pomocą unii lub skrzyżowania
// Unia typów pozwala na zadeklarowanie nowego typu, który może być jednym z kilku innych typów
// Skrzyżowanie typów pozwala zadeklarować nowy typ, który jest połączeniem dwóch innych typów

// Użyj interfejsów do definiowania kształtu obiektów

export function padLeft(value: string, padding: any): string {
  return Array(padding + 1).join(' ') + value;
}

export function padLeftWithUnion(value: string, padding: string | number): string {
  return Array(+padding + 1).join(' ') + value;
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
