abstract class Veiculo {
  public marca: string;

  constructor(marca: string) {
    this.marca = marca;
  }

  abstract exibirInformacoes(): void;
}

class Carro extends Veiculo {
  public modelo: string;

  constructor(marca: string, modelo: string) {
    super(marca);
    this.modelo = modelo;
  }

  exibirInformacoes(): void {
    console.log(`Marca do carro: ${this.marca}, Modelo: ${this.modelo}`);
  }
}

// Testando as classes
const carro = new Carro("Toyota", "Corolla");
carro.exibirInformacoes();

