abstract class Veiculo {
  abstract mover(): void;
}

class Carro extends Veiculo {
  mover(): void {
    console.log("O carro está se movendo.");
  }
}

class Barco extends Veiculo {
  mover(): void {
    console.log("O barco está navegando.");
  }
}

class Aviao extends Veiculo {
  mover(): void {
    console.log("O avião está voando.");
  }
}

function iniciarMovimento(veiculo: Veiculo): void {
  veiculo.mover();
}

// Testando polimorfismo
const carro = new Carro();
const barco = new Barco();
const aviao = new Aviao();

iniciarMovimento(carro);
iniciarMovimento(barco);
iniciarMovimento(aviao);

