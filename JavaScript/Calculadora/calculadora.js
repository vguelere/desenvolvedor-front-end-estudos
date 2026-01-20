const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Insira o primeiro número: ', (num1) => {
  rl.question('Insira o segundo número: ', (num2) => {
    rl.question('Escolha uma operação (+, -, *, /): ', (operacao) => {

      const numero1 = parseFloat(num1);
      const numero2 = parseFloat(num2);
      let resultado;

      if (operacao === '+') {
        resultado = numero1 + numero2;

             } else if (operacao === '-') {
                      resultado = numero1 - numero2;

               } else if (operacao === '*') {
                      resultado = numero1 * numero2;

                 } else if (operacao === '/') {
                      if (numero2 !== 0) {
                        resultado = numero1 / numero2;
                      } else {
                        resultado = 'Erro: Divisão por zero não é permitida.';
                      }

                         } else {
                             resultado = 'Operação inválida.';
                                }

            console.log(`Resultado: ${resultado}`);
            rl.close();
          });
      });
});
