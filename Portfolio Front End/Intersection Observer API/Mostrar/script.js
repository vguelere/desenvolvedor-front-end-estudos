// Cria um novo IntersectionObserver
// Ele observa elementos e avisa quando entram ou saem da tela
const observer = new IntersectionObserver((entries) => {

  // entries é um array com todos os elementos observados
  entries.forEach(entry => {

    // entry.isIntersecting retorna true
    // quando o elemento está visível no viewport
    if (entry.isIntersecting) {

      // entry.target é o elemento HTML observado
      // Aqui adicionamos a classe "show" nele
      entry.target.classList.add('show');

      // Se quiser que a animação aconteça só uma vez,
      // descomente a linha abaixo
      // observer.unobserve(entry.target);
    }
  });

// Aqui termina a função callback do observer
}, {

  // root define a área de observação
  // null = a própria tela (viewport)
  root: null,

  // threshold define QUANTO do elemento precisa estar visível
  // 0.3 = 30% do elemento visível já dispara
  threshold: 0.3,

  // rootMargin funciona como um "offset"
  // Exemplo: '0px 0px -50px 0px'
  // Faz o observer disparar antes ou depois
  rootMargin: '0px'
});


// Seleciona TODOS os elementos com a classe "box"
const elementos = document.querySelectorAll('.box');

// Para cada elemento encontrado
elementos.forEach(el => {

  // Diz ao observer para observar esse elemento
  observer.observe(el);

});
