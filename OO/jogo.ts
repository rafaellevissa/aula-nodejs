class Jogador {
  nome: string | null;
  score: number | null;

  constructor() {
    this.nome = null;
    this.score = null;
  }

  getNome(): string | null {
    // returns
  }

  setNome(nome: string): void {
    // returns
  }

  getScore(): number | null {
    // returns
  }

  setScore(score: number): void {
    // returns
  }

  encher(oJarro: Jarro): void {
    // Implemente a lógica de Encher
  }

  esvaziar(oJarro: Jarro): void {
    // Implemente a lógica de Esvaziar
  }

  trocar(j1: Jogador, j2: Jogador): void {
    // Implemente a lógica de Trocar
  }
}

class Jarro {
  capacidade: number | null;
  volumeAgua: number | null;

  constructor() {
    this.capacidade = null;
    this.volumeAgua = null;
  }

  getVolumeAgua(): number | null {
    // returns
  }

  setVolumeAgua(volume: number): void {
    // returns
  }

  getCapacidade(): number | null {
    // returns
  }

  setCapacidade(capacidade: number): void {
    // returns
  }
}

class Jogo {
  nome: string | null;

  constructor() {
    this.nome = null;
  }

  getNome(): string | null {
    // returns
  }

  setNome(nomeJogo: string): void {
    // returns 
  }
}

