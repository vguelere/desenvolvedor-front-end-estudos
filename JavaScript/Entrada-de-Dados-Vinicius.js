const readline = require("readline"); 

// importa o módulo readline e armazena em uma constante
// traz o módulo readline do Node.js

const r1 = readline.createInterface({ 

    input: process.stdin,    // entrada pelo teclado
    output: process.stdout  // saída no terminal

});

// cria uma interface de leitura e armazena em r1

r1.question('Qual é o seu nome?', (resposta) => { 

    // faz uma pergunta e recebe o texto digitado pelo usuário em "resposta" 

    console.log(`Olá, ${(resposta)}`);
    // exibe a resposta digitada pelo usuário

    r1.close();
    // encerra a interface readline

} )