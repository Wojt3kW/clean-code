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
const MOVIE_GENRE = {
  ROMANTIC: 'romantic',
  DRAMA: 'drama',
  COMEDY: 'comedy',
  DOCUMENTARY: 'documentary',
};

export class ProjectorWithMagicConstants {
  public configureIf(genre: string): void {
    if (genre === MOVIE_GENRE.ROMANTIC) {
      // ustaw jasność projektora na niską, głośność na cichą
    } else if (genre === MOVIE_GENRE.DRAMA) {
      // ustawić jasność projektora na średnią, głośność na średnią
    } else if (genre === MOVIE_GENRE.COMEDY) {
      // ustawić jasność projektora na wysoką, głośność na wysoką
    } else if (genre === MOVIE_GENRE.DOCUMENTARY) {
      // ustawić jasność projektor na bardzo wysoką, głośność na bardzo wysoką
    }
  }

  public configureSwitch(genre: string): void {
    switch (genre) {
      case MOVIE_GENRE.ROMANTIC:
        // ustaw jasność projektora na niską, głośność na cichą
        break;
      case MOVIE_GENRE.DRAMA:
        // ustawić jasność projektora na średnią, głośność na średnią
        break;
      case MOVIE_GENRE.COMEDY:
        // ustawić jasność projektora na wysoką, głośność na wysoką
        break;
      case MOVIE_GENRE.DOCUMENTARY:
        // ustawić jasność projektor na bardzo wysoką, głośność na bardzo wysoką
        break;
    }
  }
}

// Użyj enumów zamiast magicznych stringów
export enum GENRE {
  ROMANTIC,
  DRAMA,
  COMEDY,
  DOCUMENTARY, // <-- przecinek na końcu 😊
}

export class ProjectorWithEnum {
  public configure(genre: GENRE): void {
    switch (genre) {
      case GENRE.ROMANTIC:
        // ustaw jasność projektora na niską, głośność na cichą
        break;
      case GENRE.DRAMA:
        // ustawić jasność projektora na średnią, głośność na średnią
        break;
      case GENRE.COMEDY:
        // ustawić jasność projektora na wysoką, głośność na wysoką
        break;
      case GENRE.DOCUMENTARY:
        // ustawić jasność projektor na bardzo wysoką, głośność na bardzo wysoką
        break;
    }
  }
}
