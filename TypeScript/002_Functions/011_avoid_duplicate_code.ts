/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-magic-numbers */
// Nie twórz powtarzającego się kodu (DRY - Don't Repeat Yourself)

abstract class Employee {
  public readonly id: number;
  public readonly name: string;

  protected readonly employmentDate: Date;

  public constructor(id: number, name: string, employmentDate: Date) {
    this.id = id;
    this.name = name;
    this.employmentDate = employmentDate;
  }

  public abstract calculateProposedSalary(baseSalary: number): number;
  public abstract getExtraDetails(): Record<string, string>;

  public getYearsOfExperience(): number {
    return new Date().getFullYear() - this.employmentDate.getFullYear();
  }
}

class Developer extends Employee {
  public githubLink: string;

  public getExtraDetails(): Record<string, string> {
    return {
      githubLink: this.githubLink,
    };
  }

  public getGithubLink(): string {
    return this.githubLink;
  }

  public override calculateProposedSalary(baseSalary: number): number {
    return baseSalary + (this.getYearsOfExperience() + 1) * 500;
  }
}

class Manager extends Employee {
  public portfolio: string;

  public getExtraDetails(): Record<string, string> {
    return {
      portfolio: this.portfolio,
    };
  }

  public getMBAProjects(): string {
    return this.portfolio;
  }

  public override calculateProposedSalary(baseSalary: number): number {
    return baseSalary * 2 + (this.getYearsOfExperience() + 1) * 500;
  }
}

abstract class BaseRenderer {
  protected readonly baseSalary: number = 1000;

  protected readonly database: {
    getDevelopers: () => Developer[];
    getManagers: () => Manager[];
    getAllEmployees: () => Array<Developer | Manager>;
  };

  protected render(data: any): void {}
}

export class RendererWithDuplicatedCode extends BaseRenderer {
  public constructor() {
    super();

    const developers = this.database.getDevelopers();
    this.renderDevelopers(developers);

    const managers = this.database.getManagers();
    this.renderManagers(managers);
  }

  private renderDevelopers(developers: Developer[]): void {
    developers.forEach(developer => {
      const expectedSalary = developer.calculateProposedSalary(this.baseSalary);
      const experience = developer.getYearsOfExperience();
      const githubLink = developer.getGithubLink();

      const data = {
        expectedSalary,
        experience,
        githubLink,
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
        portfolio,
      };

      this.render(data);
    });
  }
}

export class RendererWithoutDuplicatedCode extends BaseRenderer {
  public constructor() {
    super();

    const employees = this.database.getAllEmployees();
    this.renderEmployees(employees);
  }

  private renderEmployees(employees: Array<Developer | Manager>): void {
    employees.forEach(employee => {
      const expectedSalary = employee.calculateProposedSalary(this.baseSalary);
      const experience = employee.getYearsOfExperience();
      const extra = employee.getExtraDetails();

      const data = {
        expectedSalary,
        experience,
        extra,
      };

      this.render(data);
    });
  }
}
