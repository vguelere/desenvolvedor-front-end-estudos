const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Qual é a sua idade? ', (resposta) => {

    const idade = Number(resposta);

    if (idade > 18) {
        console.log('Você é maior de idade.');
    } else if (idade < 18) {
        console.log('Você é menor de idade.');
    } else {
        console.log('Você tem exatamente 18 anos.');
    }

    r1.close();
});
