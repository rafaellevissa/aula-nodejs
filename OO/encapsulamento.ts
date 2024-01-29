class ContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  depositar(quantia: number): void {
    if (quantia > 0) {
      this.saldo += quantia;
      console.log(`Depositado: ${quantia}. Saldo atual: ${this.saldo}`);
    } else {
      console.log("A quantia de depósito deve ser positiva.");
    }
  }

  sacar(quantia: number): boolean {
    if (0 < quantia && quantia <= this.saldo) {
      this.saldo -= quantia;
      console.log(`Sacado: ${quantia}. Saldo atual: ${this.saldo}`);
      return true;
    } else {
      console.log("Quantia de saque inválida.");
      return false;
    }
  }

  obterSaldo(): number {
    return this.saldo;
  }
}

// Testando a classe
const conta = new ContaBancaria(1000.0);
conta.depositar(500.0);
conta.sacar(200.0);
console.log("Saldo final:", conta.obterSaldo());

