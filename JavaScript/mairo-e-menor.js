const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fazerPergunta(pergunta) {
    return new Promise((resolve) => {
        r1.question(pergunta, (resposta) => {
            resolve(resposta);
        });
    });
}

async function coletarResposta() {
    
    const numero1 = Number(await fazerPergunta('Digite o primeiro número: '));
    const numero2 = Number(await fazerPergunta('Digite o segundo número: '));

    if (numero1 > numero2) {
        console.log(`O número ${numero1} é maior`);
    } else if (numero2 > numero1) {
        console.log(`O número ${numero2} é maior`);
    } else {
        console.log("Os dois números são iguais");
    }

    r1.close();
}

coletarResposta();
