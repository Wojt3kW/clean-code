/* eslint-disable no-magic-numbers */

// Nie używaj magicznych stringów (magic strings)

export class ProjectorWithMagicStrings {
  public configureIf(genre: string): void {
    if (genre === 'romantic') { // 'romantic' = magic string
      // ustaw jasność projektora na niską, głośność na cichą
    } else if (genre === 'drama') { // 'drama' = magic string
      // ustawić jasność projektora na średnią, głośność na średnią
    } else if (genre === 'comedy') { // 'comedy' = magic string
      // ustawić jasność projektora na wysoką, głośność na wysoką
    } else if (genre === 'documentary') { // 'documentary' = magic string
      // ustawić jasność projektor na bardzo wysoką, głośność na bardzo wysoką
    }
  }

  public configureSwitch(genre: string): void {
    switch (genre) {
      case 'romantic': // 'romantic' = magic string
        // ustaw jasność projektora na niską, głośność na cichą
        break;
      case 'drama': // 'drama' = magic string
        // ustawić jasność projektora na średnią, głośność na średnią
        break;
      case 'comedy': // 'comedy' = magic string
        // ustawić jasność projektora na wysoką, głośność na wysoką
        break;
      case 'documentary': // 'documentary' = magic string
        // ustawić jasność projektor na bardzo wysoką, głośność na bardzo wysoką
        break;
    }
  }
}

// Użycie stałych jako "magicznych stringów"
const MovieGenre = {
  romantic: 'romantic',
  drama: 'drama',
  comedy: 'comedy',
  documentary: 'documentary',
};

export class ProjectorWithMagicConstants {
  public configureIf(genre: string): void {
    if (genre === MovieGenre.romantic) {
      // ustaw jasność projektora na niską, głośność na cichą
    } else if (genre === MovieGenre.drama) {
      // ustawić jasność projektora na średnią, głośność na średnią
    } else if (genre === MovieGenre.comedy) {
      // ustawić jasność projektora na wysoką, głośność na wysoką
    } else if (genre === MovieGenre.documentary) {
      // ustawić jasność projektor na bardzo wysoką, głośność na bardzo wysoką
    }
  }

  public configureSwitch(genre: string): void {
    switch (genre) {
      case MovieGenre.romantic:
        // ustaw jasność projektora na niską, głośność na cichą
        break;
      case MovieGenre.drama:
        // ustawić jasność projektora na średnią, głośność na średnią
        break;
      case MovieGenre.comedy:
        // ustawić jasność projektora na wysoką, głośność na wysoką
        break;
      case MovieGenre.documentary:
        // ustawić jasność projektor na bardzo wysoką, głośność na bardzo wysoką
        break;
    }
  }
}

// Użyj enumów zamiast magicznych stringów
export enum Genre {
  Romantic = 1,
  Drama = 2,
  Comedy = 3,
  Documentary = 4,
}

export class ProjectorWithEnum {
  public configure(genre: Genre): void {
    switch (genre) {
      case Genre.Romantic:
        // ustaw jasność projektora na niską, głośność na cichą
        break;
      case Genre.Drama:
        // ustawić jasność projektora na średnią, głośność na średnią
        break;
      case Genre.Comedy:
        // ustawić jasność projektora na wysoką, głośność na wysoką
        break;
      case Genre.Documentary:
        // ustawić jasność projektor na bardzo wysoką, głośność na bardzo wysoką
        break;
    }
  }
}
