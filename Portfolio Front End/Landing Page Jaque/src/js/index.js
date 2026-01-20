const imagens = document.querySelectorAll('.imagem-painel');
const btnVoltar = document.getElementById('btn-voltar'); 
const btnAvancar = document.getElementById('btn-avancar');
let  imagemAtual = 0;

function esconderImagens() {
  imagens.forEach(imagem => {
    imagem.classList.remove('mostrar');
  });
}

function mostrarImagem() {
  imagens[imagemAtual].classList.add('mostrar');
} 

function mostrarOuEsconderSetas() {
  const naoEhAPrimeiraImagem = imagemAtual !== 0;
  if (naoEhAPrimeiraImagem) {
    btnVoltar.classList.remove("opacidade");
  } else {
    btnVoltar.classList.add("opacidade");
  }

  const chegouNaUltimaImagem = imagemAtual === imagens.length -1;
  if (chegouNaUltimaImagem) {
    btnAvancar.classList.add("opacidade");
  } else {
    btnAvancar.classList.remove("opacidade")
  }
};
 
 
btnAvancar.addEventListener('click', function() {
  if(imagemAtual !== imagens.length -1) {
    imagemAtual++;
  }

   esconderImagens();
   mostrarImagem();
   mostrarOuEsconderSetas();
})

btnVoltar.addEventListener('click', function() {

  if (imagemAtual !== 0) {
    imagemAtual--;
  }

  esconderImagens();
  mostrarImagem();
  mostrarOuEsconderSetas();
});

mostrarImagem();
mostrarOuEsconderSetas();


/* <--------------------DESCRIÇÃO--------------------->*/
/* quando clicar na seta avançar, temos que esconder todas as imagens e mostrar a próxima imagem  */

/* testa se o contador de imagemAtual é igual ao total de imagens */

 /* a imagem atual começa em 0 pq é a primeira imagem
   assim que for clicado no avançar, eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a segunda imagem */

    /* esconder todas as imagens
       pegar todas as imagens usando o DOM e remover a class mostrar */

        /* mostrar a próxima  imagem
       pegar todas as imagens, descobrir qual é a próxima, e colocar a class msotrar nela */

       const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = latin + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = 'rgba(0, 49, 0, 1)';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 30);