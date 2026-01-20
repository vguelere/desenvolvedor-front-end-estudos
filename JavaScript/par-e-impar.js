const readline = require("readline");

const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

r1.question(`Digite um número:`, (resposta) =>{

    const numeroDigitado = parseInt(resposta);

    if (numeroDigitado % 2 === 0){

        console.log("Seu número é par");
   }
   else {
        console.log("Seu número é impar.")

   }

   r1.close();

});