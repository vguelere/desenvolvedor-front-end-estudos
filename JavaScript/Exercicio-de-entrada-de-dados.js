const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fazerPergunta(pergunta){
    return new Promise((resolve) => {

        r1.question(pergunta, (resposta) => {
        resolve (resposta);
        });
    })
}

async function coletarResposta() {
    const nome = await fazerPergunta('Qual o seu nome?');
    const idade = await fazerPergunta('Qual a sua idade?');
    const cidade = await fazerPergunta('Qual o sua cidade?'); 

    console.log(`\n 
        Meu nome é: ${nome}
        Minha idade é: ${idade}
        Minha cidade é: ${cidade}  
        `);


    r1.close();
}

coletarResposta();