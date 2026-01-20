const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite o mês do ano (1 a 12): ', (mesNumerico) => {
  const mes = parseInt(mesNumerico);
  let estacao;

  if (isNaN(mes)) {
    console.log('Entrada inválida. Digite um número.');
    rl.close();
    return;
  }

  switch (mes) {
    case 12:
    case 1:
    case 2:
      estacao = 'Verão';
      break;
    case 3:
    case 4:
    case 5:
      estacao = 'Outono';
      break;
    case 6:
    case 7:
    case 8:
      estacao = 'Inverno';
      break;
    case 9:
    case 10:
    case 11:
      estacao = 'Primavera';
      break;
    default:
      estacao = 'Número inválido. Por favor, insira um número de 1 a 12.';
  }

  console.log(estacao);
  rl.close();
});
