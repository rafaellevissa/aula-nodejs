function saudacao(nome: string, mensagem: string = "Olá", repeticao: number = 1): void {
  for (let i = 0; i < repeticao; i++) {
    console.log(`${mensagem}, ${nome}!`);
  }
}

// Chamando a função com diferentes números de argumentos
saudacao("Maria");
saudacao("João", "Bom dia");
saudacao("Ana", "Boa noite", 3);

