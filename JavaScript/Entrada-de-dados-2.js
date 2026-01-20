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
    
    const nome = await fazerPergunta('Qual é o seu nome?');
    const corFavorita = await fazerPergunta('Qual é a sua cor favorita?');
    const animalFavorito = await fazerPergunta('Qual é o seu animal favorito?');
    const hobby = await fazerPergunta('Qual é o seu hobby?');
    const pratoFavorito = await fazerPergunta('Qual é o seu prato favorito?');

    console.log(`\nAqui estão suas respostas:
        Nome: ${nome}
        Cor favorita: ${corFavorita}
        Animal Favorito: ${animalFavorito}
        Hobby: ${hobby}
        Prato Favorito: ${pratoFavorito}

   `);

       r1.close();
   
}

coletarResposta();