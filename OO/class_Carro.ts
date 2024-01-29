class Carro {
  private cor: string | null = null;
  private nRodas: number | null = null;

  constructor(corCarro: string, nRodasCarro: number) {
    this.cor = corCarro;
    this.nRodas = nRodasCarro;
  }

  getCor(): string | null {
    return this.cor;
  }

  getNRodas(): number | null {
    return this.nRodas;
  }

  escreva(): void {
    console.log(`${this.nRodas}`);
    console.log(`${this.cor}`);
  }
}

const c = new Carro("Amarelo", 4);
c.escreva();

