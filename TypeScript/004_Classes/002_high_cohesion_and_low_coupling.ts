// Wysoka spójność (high cohesion) i niska zależność (low coupling)

// Kohezja (spójność) określa jak bardzo elementy pojedynczej klasy "pasują do siebie".
// Wysoka kohezja oznacza, że klasa ma tylko jedną odpowiedzialność.

// Coupling określa stopień zależności między klasami czy modułami/bibliotekami. Siłę ich relacji.
// Niskie sprzężenie oznacza, że zmiana w jednym miejscu nie wpłynie na inne miejsca.

// Kod, który jest łatwy w utrzymaniu i odporny na zmiany,
// charakteryzuje się tym, że klasy są niezależne i słabo powiązane ze sobą

class User {
  public readonly id: number;
}
class Transaction {
  public readonly id: number;
  public readonly userId: number;
}
class Database {
  public users: {
    findOne: ({ id }: { id: number }) => Promise<User>;
  };

  public transactions: {
    find: ({ userId }: { userId: number }) => Promise<Transaction[]>;
  };
}
class EmailSender {
  public send: (message: string) => Promise<void>;
}
class NewsletterSender {
  public send: (content: string) => Promise<void>;
}

/*
 Przykład klasy z niską spójnością i dużymi zależnościami
 Zmienne prywatne są używane przez metody związane z użytkownikami i transakcjami
 Klasa ma więcej niż jedną odpowiedzialność
 Chcąc skorzystać z funkcjonalności związanej z użytkownikami,
 musimy również korzystać z emaili i powiadomień
*/
export class UserServiceHighCoupling {
  public constructor(
    private readonly _db: Database,
    private readonly _emailSender: EmailSender,
    private readonly _newsletterSender: NewsletterSender) {
  }

  public async getUser(id: number): Promise<User> {
    return await this._db.users.findOne({ id });
  }

  public async getTransactions(userId: number): Promise<Transaction[]> {
    return await this._db.transactions.find({ userId });
  }

  public async sendGreeting(): Promise<void> {
    await this._emailSender.send('Welcome!');
  }

  public async sendNotification(text: string): Promise<void> {
    await this._emailSender.send(text);
  }

  public async sendNewsletter(): Promise<void> {
    const newsletterContent = 'Newsletter';
    await this._newsletterSender.send(newsletterContent);
  }
}

/*
 Przykład klas z wysoką spójnością i niskimi zależnościami
 Każda klasa ma jedną odpowiedzialność
 Klasa jest łatwa w utrzymaniu i odporna na zmiany
*/
export class UserService {
  public constructor(
    private readonly _db: Database) {
  }

  public async getUser(id: number): Promise<User> {
    return await this._db.users.findOne({ id });
  }
}

export class TransactionService {
  public constructor(
    private readonly _db: Database) {
  }

  public async getTransactions(userId: number): Promise<Transaction[]> {
    return await this._db.transactions.find({ userId });
  }
}

export class EmailService {
  public constructor(
    private readonly _emailSender: EmailSender) {
  }

  public async sendGreeting(): Promise<void> {
    await this._emailSender.send('Welcome!');
  }

  public async sendNotification(text: string): Promise<void> {
    await this._emailSender.send(text);
  }
}

export class NewsletterService {
  public constructor(
    private readonly _newsletterSender: NewsletterSender) {
  }

  public async send(): Promise<void> {
    const newsletterContent = 'Newsletter';
    await this._newsletterSender.send(newsletterContent);
  }
}
