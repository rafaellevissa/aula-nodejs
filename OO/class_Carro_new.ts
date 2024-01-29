class Carro {
  private cor: string;
  private nRodas: number;

  constructor(corCarro: string, nRodasCarro: number) {
    this.cor = corCarro;
    this.nRodas = nRodasCarro;
  }

  getCor(): string {
    return this.cor;
  }

  getNRodas(): number {
    return this.nRodas;
  }

  escreva(): void {
    console.log(`${this.nRodas}`);
    console.log(`${this.cor}`);
  }
}

const c = new Carro("Amarelo", 4);
c.escreva();

