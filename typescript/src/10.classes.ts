class Person {
  // Properties
  private name: string;
  protected age: number;
  public email: string;

  //   contsructor
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  //   methods
  public introduce(): string {
    return `Hello I am ${this.name} and I am ${this.age} years old`;
  }

  //   Getter
  public getName(): string {
    return this.name;
  }

  //   Setter
  public setName(name: string): void {
    this.name = name;
  }
}

class Employee {
  constructor(
    protected id: number,
    public name: string,
    protected department: string,
  ) {}
  getDetails(): string {
    return `${this.name} work in ${this.department}`;
  }
}

let nahid = new Employee(143, "nahid hasan", "Engineerign");
console.log(nahid.getDetails());

class Manager extends Employee {
  constructor(
    id: number,
    name: string,
    department: string,
    private teamSize: number,
  ) {
    super(id, name, department);
  }

  getTeamInfo(): string {
    return `${this.name} manages ${this.teamSize}`;
  }
}
