document.querySelectorAll('.menu a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute('href'));
    if (!destino) return;

    destino.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});


const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});



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

//elemento novo
const animatedElements = document.querySelectorAll('.animate');
console.log(animatedElements);

const duration = contentWidth / 100;