class Motor {
  private potencia: number;

  constructor(potencia: number) {
    this.potencia = potencia;
  }

  ligar(): void {
    console.log(`Motor de ${this.potencia} cavalos ligado.`);
  }
}

class Carro {
  private marca: string;
  private modelo: string;
  private motor: Motor;

  constructor(marca: string, modelo: string, potenciaMotor: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.motor = new Motor(potenciaMotor); // Composição
  }

  ligarCarro(): void {
    console.log(`Carro ${this.modelo} da marca ${this.marca} sendo ligado.`);
    this.motor.ligar();
  }
}

// Testando a composição
const meuCarro = new Carro("Toyota", "Corolla", 150);
meuCarro.ligarCarro();

