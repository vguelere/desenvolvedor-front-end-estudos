
/* Animação de  Intersection Observer */
// Cria o observer
const observer = new IntersectionObserver((entries) => {

  // Percorre todos os elementos observados
  entries.forEach(entry => {

    // Se o elemento entrou na tela
    if (entry.isIntersecting) {

      // Adiciona a classe "show"
      entry.target.classList.add('show');

      // Para observar depois (anima só uma vez)
      observer.unobserve(entry.target);
    }
  });

// Configurações do observer
}, {
  threshold: 0.2 // 20% visível já anima
});


// Seleciona todos os elementos que devem animar
const animatedElements = document.querySelectorAll('.animate');

// Ativa o observer para cada elemento
animatedElements.forEach(el => observer.observe(el));
