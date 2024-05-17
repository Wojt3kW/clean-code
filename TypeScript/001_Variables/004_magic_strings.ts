// Nie używaj ani magicznych liczb ani magicznych stringów (magic strings and magic numbers)

export class ProjectorWithMagicStrings {
  public configure(genre: string): void {
    if (genre === 'romantic') {
      // 'romantic' = magic string
      // ustaw jasność projektor na niską
      // ustaw głośność na cichą
    } else if (genre === 'drama') {
      // 'drama' = magic string
      // ustawić jasność projektor na średnią
      // ustawić głośność na średnią
    } else if (genre === 'comedy') {
      // 'comedy' = magic string
      // ustawić jasność projektor na wysoką
      // ustawić głośność na wysoką
    } else if (genre === 'documentary') {
      // 'documentary' = magic string
      // ustawić jasność projektor na bardzo głośną
      // ustawić głośność na bardzo głośną
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
  public configure_if(genre: string): void {
    if (genre === MOVIE_GENRE.ROMANTIC) {
      // ustaw jasność projektor na niską
      // ustaw głośność na cichą
    } else if (genre === MOVIE_GENRE.DRAMA) {
      // ustawić jasność projektor na średnią
      // ustawić głośność na średnią
    } else if (genre === MOVIE_GENRE.COMEDY) {
      // ustawić jasność projektor na wysoką
      // ustawić głośność na wysoką
    } else if (genre === MOVIE_GENRE.DOCUMENTARY) {
      // ustawić jasność projektor na bardzo głośną
      // ustawić głośność na bardzo głośną
    }
  }

  public configure_switch(genre: string): void {
    switch (genre) {
      case MOVIE_GENRE.ROMANTIC:
        // ustaw jasność projektor na niską
        // ustaw głośność na cichą
        break;
      case MOVIE_GENRE.DRAMA:
        // ustawić jasność projektor na średnią
        // ustawić głośność na średnią
        break;
      case MOVIE_GENRE.COMEDY:
        // ustawić jasność projektor na wysoką
        // ustawić głośność na wysoką
        break;
      case MOVIE_GENRE.DOCUMENTARY:
        // ustawić jasność projektor na bardzo głośną
        // ustawić głośność na bardzo głośną
        break;
    }
  }
}

// Użyj enumów zamiast magicznych stringów
export enum GENRE {
  ROMANTIC,
  DRAMA,
  COMEDY,
  DOCUMENTARY,
}

export class ProjectorWithEnum {
  public configureFilm(genre: GENRE): void {
    switch (genre) {
      case GENRE.ROMANTIC:
        // ustaw jasność projektor na niską
        // ustaw głośność na cichą
        break;
      case GENRE.DRAMA:
        // ustawić jasność projektor na średnią
        // ustawić głośność na średnią
        break;
      case GENRE.COMEDY:
        // ustawić jasność projektor na wysoką
        // ustawić głośność na wysoką
        break;
      case GENRE.DOCUMENTARY:
        // ustawić jasność projektor na bardzo głośną
        // ustawić głośność na bardzo głośną
        break;
    }
  }
}
