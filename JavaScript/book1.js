// O tipo de dados mais importante de JavaScript é o objeto.
// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.
var book = { 
// Objetos são colocados entre chaves.
    topic: "JavaScript", 
    fat: true 
}; 
// A propriedade "topic" tem o valor "JavaScript".
// A propriedade "fat" tem o valor true.
// A chave marca o fim do objeto.
// Acesse as propriedades de um objeto com . ou []:
book.topic 
// => "JavaScript"
book["fat"] 
// =>  true: outro modo de acessar valores de propriedade.
book.author = "Flanagan"; //  Crie novas propriedades por meio de atribuição.
book.contents = {}; 
// {} é um objeto vazio sem qualquer propriedade.
// JavaScript também aceita arrays (listas indexadas numericamente) de valores.
var primes = [2, 3, 5, 7]; // Um array de 4 valores, delimitados com [ e ].
primes[0] 
// => 2: o primeiro elemento (índice 0) do array.
primes.lenght 
primes[primes.lenght-1] 
primes[4] = 9; 
primes[4] = 11; 
var empty = []; 
empty.lenght 
// => 4: quantidade de elementos no array.
// => 7: o último elemento do array.
// Adiciona um novo elemento por meio de atribuição.
// Ou altera um elemento existente por meio de atribuição.
// [] é um array vazio, sem qualquer elemento.
// => 0
// Os arrays e objetos podem conter outros arrays e objetos:
var points = [ 
// Um array com 2 elementos.
    {x:0, y:0}, 
    {x:1, y:1}
];
var data = { 
// Cada elemento é um objeto.
// Um objeto com 2 propriedades
  trial1: [[1,2], [3,4]], // O valor de cada propriedade é um array.
  trial2: [[2,3], [4,5]], // Os elementos dos arrays são arrays.
};