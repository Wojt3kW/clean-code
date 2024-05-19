// Funkcje powinny robić jedną konkretną rzecz/czynność/operację
// KISS - Keep It Simple Stupid,
// SRP - Single Responsibility Principle

export interface IClient {
  id: number;
  name: string;
  email: string;
}
export class Client implements IClient {
  public readonly id: number;
  public readonly name: string;
  public readonly email: string;
  public readonly isLockedOut: boolean;

  public constructor(id: number, name: string, email: string, isLockedOut: boolean) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.isLockedOut = isLockedOut;
  }

  public isActive(): boolean {
    return !this.isLockedOut;
  }
}
abstract class BaseClass {
  protected readonly database: {
    getClient: (clientId: number) => Client;
    getAllClients: () => Client[];
  };

  public constructor() {
    this.database = {
      getClient: (clientId: number): Client => {
        const clientRecord = this.database.getAllClients().find(c => c.id === clientId);

        if (clientRecord === undefined) {
          throw new Error('Client not found');
        }

        return clientRecord;
      },
      getAllClients: (): Client[] => {
        return [
          new Client(1, 'Client 1', 'client1@email1.com', true),
          new Client(2, 'Client 2', 'client1@email2.com', true),
          new Client(3, 'Client 3', 'client1@email3.com', true)];
      },
    };
  }

  protected sendEmail(client: IClient): void {
    // send email to client
  }

  protected abstract emailActiveClients(clients: Client[]): void;
}

export class BadComplexFunction extends BaseClass {
  public emailActiveClients(clients: IClient[]): void {
    clients.forEach((client: IClient) => {
      const clientRecord: Client = this.database.getClient(client.id);
      if (!clientRecord.isLockedOut) {
        this.sendEmail(client);
      }
    });
  }
}

export class GoodSimpleFunctions extends BaseClass {
  public emailActiveClients(clients: IClient[]): void {
    const activeClients = this.getActiveClients(clients);

    activeClients.forEach(client => {
      this.sendEmail(client);
    });
  }

  private getActiveClients(clients: IClient[]): IClient[] {
    return this.database
      .getAllClients()
      .filter(client => this.isActiveClient(client) &&
                        clients.some(c => c.id === client.id));
  }

  private isActiveClient(client: Client): boolean {
    return client.isActive();
  }
}
