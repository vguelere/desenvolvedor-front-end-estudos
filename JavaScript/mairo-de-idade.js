const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Qual é a sua idade? ', (idade) => {

    console.log(idade);

    r1.close()

});
