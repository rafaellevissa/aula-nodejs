class Student {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }
}

// Testando a classe
const std = new Student("Swati");
console.log(std.name);  // 'Swati'

std.name = 'Dipa';
console.log(std.name);  // 'Dipa'
console.log(std['_name']); // 'Dipa'

