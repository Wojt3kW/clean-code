class User {
  public readonly id: number;
}

class Transaction {
  public readonly id: number;
  public readonly userId: number;
}

class Database {
  public users: {
    findOne: (where: Record<string, any>) => Promise<User>;
  };

  public transactions: {
    findMany: (where: Record<string, any>) => Promise<Transaction[]>;
  };
}

interface IRepository<T> {
  findOne: (where: Record<string, any>) => Promise<T>;
  findMamy: (where: Record<string, any>) => Promise<T[]>;
  create: (item: T) => Promise<T>;
  update: (id: number, item: T) => Promise<T>;
  delete: (id: number) => Promise<void>;
}

interface IUserRepository extends IRepository<User> {
}

interface ITransactionRepository extends IRepository<Transaction> {
}

interface IEmailSender {
  send: (message: string) => Promise<void>;
}

class EmailSender implements IEmailSender {
  public send: (message: string) => Promise<void>;
}

interface INotificationSender {
  push: (content: string) => Promise<void>;
}

class NotificationSender implements INotificationSender {
  public push: (content: string) => Promise<void>;
}

// Wysoka spójność (high cohesion) i niska zależność (low coupling)

// Kohezja (spójność) określa jak bardzo elementy pojedynczej klasy "pasują do siebie".
// Wysoka kohezja oznacza, że klasa ma tylko jedną odpowiedzialność.

// Coupling określa stopień zależności między klasami czy modułami/bibliotekami. Siłę ich relacji.
// Niskie sprzężenie oznacza, że zmiana w jednym miejscu nie wpłynie na inne miejsca.

// Kod, który jest łatwy w utrzymaniu i odporny na zmiany,
// charakteryzuje się tym, że klasy są niezależne i słabo powiązane ze sobą

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
    private readonly _notificationSender: NotificationSender) {
  }

  public async getUser(id: number): Promise<User> {
    return await this._db.users.findOne({ id });
  }

  public async getTransactions(userId: number): Promise<Transaction[]> {
    return await this._db.transactions.findMany({ userId });
  }

  public async sendGreeting(): Promise<void> {
    await this._emailSender.send('Welcome!');
  }

  public async sendNewsletter(): Promise<void> {
    const newsletterContent = 'Newsletter';
    await this._emailSender.send(newsletterContent);
  }

  public async sendNotification(text: string): Promise<void> {
    await this._notificationSender.push(text);
  }
}

/*
 Przykład klas z wysoką spójnością i niskimi zależnościami
 Każda klasa ma jedną odpowiedzialność
 Każda klasa jest niezależna od innych klas, są niezależne od konkretnych implementacji
 Klasa jest łatwa w utrzymaniu i odporna na zmiany
*/
export class UserService {
  public constructor(
    private readonly _repository: IUserRepository) {
  }

  public async get(id: number): Promise<User> {
    return await this._repository.findOne({ id });
  }
}

export class TransactionService {
  public constructor(
    private readonly _repository: ITransactionRepository) {
  }

  public async get(userId: number): Promise<Transaction[]> {
    return await this._repository.findMamy({ userId });
  }
}

export class EmailService {
  public constructor(
    private readonly _emailSender: IEmailSender) {
  }

  public async sendGreeting(): Promise<void> {
    await this._emailSender.send('Welcome!');
  }

  public async sendNewsletter(): Promise<void> {
    const newsletterContent = 'Newsletter';
    await this._emailSender.send(newsletterContent);
  }
}

export class NotificationService {
  public constructor(
    private readonly _notificationSender: INotificationSender) {
  }

  public async sendNotification(text: string): Promise<void> {
    await this._notificationSender.push(text);
  }
}
