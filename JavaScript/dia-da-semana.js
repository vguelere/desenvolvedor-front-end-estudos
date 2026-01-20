const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question(
  'Digite um número representando um dia da semana (1 Domingo, 2 Segunda, 3 Terça, etc): ',
  (numero) => {

    const dia = parseInt(numero);

    if (dia === 1) {
      console.log('O dia é Domingo');
    } else if (dia === 2) {
      console.log('O dia é Segunda-feira');
    } else if (dia === 3) {
      console.log('O dia é Terça-feira');
    } else if (dia === 4) {
      console.log('O dia é Quarta-feira');
    } else if (dia === 5) {
      console.log('O dia é Quinta-feira');
    } else if (dia === 6) {
      console.log('O dia é Sexta-feira');
    } else if (dia === 7) {
      console.log('O dia é Sábado');
    } else {
      console.log('Não é um número válido, digite novamente.');
    }

    r1.close();
  }
);
