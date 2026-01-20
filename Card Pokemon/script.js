const botao = document.getElementById("btn");
const card = document.getElementById("card");

let pokemonData = null;

// carregar o JSON
fetch("pokemon.json")
  .then(response => response.json())
  .then(data => {
    pokemonData = data;
    console.log("JSON carregado:", pokemonData);
  })
  .catch(error => {
    console.error("Erro ao carregar JSON:", error);
  });

// botão
botao.addEventListener("click", () => {
  if (!pokemonData) {
    alert("JSON ainda não carregou");
    return;
  }

  // sprite (arte oficial)
  const imagem =
    pokemonData.sprites.other["official-artwork"].front_default;

  // tipos
  const tipos = pokemonData.types
    .map(t => t.type.name)
    .join(", ");

  // stats
  const stats = pokemonData.stats
    .map(s => `<li>${s.stat.name}: ${s.base_stat}</li>`)
    .join("");

  // renderizar card
  card.innerHTML = `
    <div style="border:1px solid #000; width:300px; padding:10px;">
      <img src="${imagem}" width="200">
      <p><strong>Tipo:</strong> ${tipos}</p>
      <p><strong>Peso:</strong> ${pokemonData.weight}</p>
      <ul>${stats}</ul>
    </div>
  `;
});
