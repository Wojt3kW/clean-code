/* eslint-disable no-magic-numbers */

// Funkcje powinny robić jedną konkretną rzecz/czynność/operację
// KISS - Keep It Simple Stupid,
// SRP - Single Responsibility Principle

// To mógłby być DTO (Data Transfer Object)
// DTO vs TEntity
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
  // public readonly expirationDate: Date;

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
    getClients: (clientIds: number[]) => Client[];
  };

  public constructor() {
    this.database = {
      getClient: (clientId: number): Client => {
        const clientRecord = this.database.getClients([clientId])[0];

        if (clientRecord === undefined) {
          throw new Error('Client not found');
        }

        return clientRecord;
      },
      getClients: (clientIds: number[]): Client[] => {
        return [
          new Client(1, 'Client 1', 'client1@email1.com', true),
          new Client(2, 'Client 2', 'client1@email2.com', true),
          new Client(3, 'Client 3', 'client1@email3.com', true)]
          .filter(client => clientIds.includes(client.id));
      },
    };
  }

  protected sendEmail(client: IClient): void {
    // send email to client
  }

  public abstract emailActiveClients(clients: Client[]): void;
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
      .getClients(clients.map(client => client.id))
      .filter(client => this.isActiveClient(client));
  }

  private isActiveClient(client: Client): boolean {
    return client.isActive();
  }
}
