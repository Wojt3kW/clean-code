/* eslint-disable no-magic-numbers */
import { GoodSimpleFunctions, BadComplexFunction, Client } from './0061a_srp';

describe('tests of GoodSimpleFunctions class', () => {
  let goodFunctions: GoodSimpleFunctions;

  beforeEach(() => {
    goodFunctions = new GoodSimpleFunctions();
  });

  describe('emailActiveClients', () => {
    it('should email active clients', () => {
      // Arrange
      const clients: Client[] = [
        new Client(1, 'Client 1', 'client1@email1.com', false),
        new Client(2, 'Client 2', 'client1@email2.com', true),
        new Client(3, 'Client 3', 'client1@email3.com', false),
      ];

      jest.spyOn((goodFunctions as any).database, 'getAllClients').mockImplementation((): Client[] => {
        return clients;
      });

      const emailSpy = jest.spyOn(goodFunctions, 'sendEmail' as keyof GoodSimpleFunctions);

      // Act
      goodFunctions.emailActiveClients(clients);

      // Assert
      expect(emailSpy).toHaveBeenCalledTimes(2);
      expect(emailSpy).toHaveBeenCalledWith(clients[0]);
      expect(emailSpy).toHaveBeenCalledWith(clients[2]);
    });
  });

  describe('isActiveClient', () => {
    it('should return true for active client', () => {
      // Arrange
      const client = new Client(1, 'Client 1', 'client1@email1.com', false);

      jest.spyOn((goodFunctions as any).database, 'getAllClients').mockImplementation((): Client[] => {
        return [client];
      });

      // Act
      const isActive = (goodFunctions as any).isActiveClient(client);

      // Assert
      expect(isActive).toBe(true);
    });

    it('should return false for inactive client', () => {
      // Arrange
      const client = new Client(1, 'Client 1', 'client1@email1.com', true);

      jest.spyOn((goodFunctions as any).database, 'getAllClients').mockImplementation((): Client[] => {
        return [client];
      });

      // Act
      const isActive = (goodFunctions as any).isActiveClient(client);

      // Assert
      expect(isActive).toBe(false);
    });
  });
});

describe('tests of BadComplexFunction class', () => {
  let badFunction: BadComplexFunction;

  beforeEach(() => {
    badFunction = new BadComplexFunction();
  });

  describe('emailActiveClients', () => {
    it('should email active clients', () => {
      // Arrange
      const clients: Client[] = [
        new Client(1, 'Client 1', 'client1@email1.com', false),
        new Client(2, 'Client 2', 'client1@email1.com', true),
        new Client(3, 'Client 3', 'client1@email1.com', false),
      ];

      jest.spyOn((badFunction as any).database, 'getAllClients').mockImplementation((): Client[] => {
        return clients;
      });

      const emailSpy = jest.spyOn(badFunction, 'sendEmail' as keyof BadComplexFunction);

      // Act
      badFunction.emailActiveClients(clients);

      // Assert
      expect(emailSpy).toHaveBeenCalledTimes(2);
      expect(emailSpy).toHaveBeenCalledWith(clients[0]);
      expect(emailSpy).toHaveBeenCalledWith(clients[2]);
    });
  });
});
