const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question('Insira o primeiro numero:', (primeiroNumero) => {

        r1.question('Insira o segundo numero: ', (segundoNumero) => {


            const num1 = Number(primeiroNumero);
            const num2 = Number(segundoNumero);

            if (num1 > num2) {
            console.log(`O maior número é: ${num1}`);
            } else if (num2 > num1) {
            console.log(`O maior número é: ${num2}`);
            } else {
            console.log('Os números são iguais.');
            }

            r1.close();

        });

});