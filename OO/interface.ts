abstract class IVeiculo {
  abstract exibirInformacoes(): void;
}

class Carro implements IVeiculo {
  private marca: string;
  private modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  exibirInformacoes(): void {
    console.log(`Marca do carro: ${this.marca}, Modelo: ${this.modelo}`);
  }
}

// Testando a interface e a classe
const carro = new Carro("Toyota", "Corolla");
carro.exibirInformacoes();

