/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-magic-numbers */
// Nie twórz powtarzającego się kodu (DRY - Don't Repeat Yourself)

abstract class Employee {
  public readonly id: number;
  public readonly name: string;

  private readonly _employmentDate: Date;

  public constructor(id: number, name: string, employmentDate: Date) {
    this.id = id;
    this.name = name;
    this._employmentDate = employmentDate;
  }

  public abstract calculateProposedSalary(baseSalary: number): number;
  public abstract getExtraDetails(): Record<string, string>;

  public getYearsOfExperience(): number {
    return new Date().getFullYear() - this._employmentDate.getFullYear();
  }
}

class Developer extends Employee {
  public readonly githubLink: string;

  public constructor(id: number, name: string, employmentDate: Date, githubLink: string) {
    super(id, name, employmentDate);
    this.githubLink = githubLink;
  }

  public getGithubLink(): string {
    return this.githubLink;
  }

  public override calculateProposedSalary(baseSalary: number): number {
    return baseSalary + (this.getYearsOfExperience() + 1) * 500;
  }

  public getExtraDetails(): Record<string, string> {
    return {
      githubLink: this.githubLink,
    };
  }
}

class Manager extends Employee {
  public readonly portfolio: string;

  public constructor(id: number, name: string, employmentDate: Date, portfolio: string) {
    super(id, name, employmentDate);
    this.portfolio = portfolio;
  }

  public getMBAProjects(): string {
    return this.portfolio;
  }

  public override calculateProposedSalary(baseSalary: number): number {
    return baseSalary * 2 + (this.getYearsOfExperience() + 1) * 500;
  }

  public getExtraDetails(): Record<string, string> {
    return {
      portfolio: this.portfolio,
    };
  }
}

abstract class BaseRenderer {
  protected readonly baseSalary: number = 1000;

  protected readonly database: {
    getDevelopers: () => Developer[];
    getManagers: () => Manager[];
    getEmployees: () => Array<Developer | Manager>;
  } = {
      getDevelopers: () => [
        new Developer(1, 'John Smith', new Date('2010-10-10'), 'https://github.com/JohnSmith'),
        new Developer(2, 'Fred Bloggs', new Date('2015-05-05'), 'https://github.com/FredBloggs'),
      ],
      getManagers: () => [
        new Manager(3, 'Jane Doe', new Date('2005-01-01'), 'http://www.linkedin.com/JaneDoe'),
        new Manager(4, 'Alice Cooper', new Date('2010-12-12'), 'http://www.linkedin.com/AliceCooper'),
      ],
      getEmployees: () => {
        const developers = this.database.getDevelopers();
        const managers = this.database.getManagers();
        return [...developers, ...managers];
      },
    };

  protected render(data: any): void {
    console.log(data);
  }
}

export class RendererWithDuplicatedCode extends BaseRenderer {
  public constructor() {
    super();

    const developers = this.database.getDevelopers();
    this.renderDevelopers(developers.sort((a, b) => a.name.localeCompare(b.name)));

    const managers = this.database.getManagers();
    this.renderManagers(managers.sort((a, b) => a.name.localeCompare(b.name)));
  }

  private renderDevelopers(developers: Developer[]): void {
    developers.forEach(developer => {
      const expectedSalary = developer.calculateProposedSalary(this.baseSalary);
      const experience = developer.getYearsOfExperience();
      const githubLink = developer.getGithubLink();

      const data = {
        expectedSalary,
        experience,
        extraDetails: { githubLink },
      };

      this.render(data);
    });
  }

  private renderManagers(managers: Manager[]): void {
    managers.forEach(manager => {
      const expectedSalary = manager.calculateProposedSalary(this.baseSalary);
      const experience = manager.getYearsOfExperience();
      const portfolio = manager.getMBAProjects();

      const data = {
        expectedSalary,
        experience,
        extraDetails: { portfolio },
      };

      this.render(data);
    });
  }
}

const rendererWithDuplicatedCode = new RendererWithDuplicatedCode();

export class RendererWithoutDuplicatedCode extends BaseRenderer {
  public constructor() {
    super();

    const employees = this.database.getEmployees();
    this.renderEmployees(employees.sort((a, b) => a.name.localeCompare(b.name)));
  }

  private renderEmployees(employees: Array<Developer | Manager>): void {
    employees.forEach(employee => {
      const expectedSalary = employee.calculateProposedSalary(this.baseSalary);
      const experience = employee.getYearsOfExperience();
      const extraDetails = employee.getExtraDetails();

      const data = {
        expectedSalary,
        experience,
        extraDetails,
      };

      this.render(data);
    });
  }
}

const rendererWithoutDuplicatedCode = new RendererWithoutDuplicatedCode();
