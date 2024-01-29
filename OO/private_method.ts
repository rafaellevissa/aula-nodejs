class Student {
  private static schoolName: string = 'XYZ School'; // private class attribute
  private name: string; // private instance attribute
  private age: number;  // private instance attribute

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  private display(): void { // private method
    console.log('This is a private method.');
  }

  // Métodos públicos para acesso e modificação dos atributos privados
  getName(): string {
    return this.name;
  }

  setName(newName: string): void {
    this.name = newName;
  }

  // Chamando um método privado
  callPrivateDisplay(): void {
    this.display();
  }
}

// Testando a classe
const std = new Student("Bill", 25);

// Acesso e modificação de atributos privados
console.log(std.getName());  // 'Bill'

std.setName('Steve');
console.log(std.getName());  // 'Steve'

// Chamando um método privado
std.callPrivateDisplay();  // 'This is a private method.'

