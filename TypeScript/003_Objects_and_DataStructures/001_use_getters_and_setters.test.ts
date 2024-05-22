import { ClassWitGetterAndSetter, ClassWithoutGetterAndSetter } from './001_use_getters_and_setters';

describe('ClassWitGetterAndSetter', () => {
  let classWithPerson: ClassWitGetterAndSetter | ClassWithoutGetterAndSetter;

  beforeEach(() => {
    classWithPerson = new ClassWitGetterAndSetter();
  });

  describe('person age setter', () => {
    it('should set age when age is correct', () => {
      // Arrange
      const person = classWithPerson.person;
      // Act
      person.age = 20;
      // Assert
      expect(person.age).toBe(20);
    });

    it('should throw an exception when age is negative', () => {
      // Arrange
      const person = classWithPerson.person;

      // Assert
      expect(() => {
        // Act
        person.age = -100;
      }).toThrow(Error);
    });
  });
});
