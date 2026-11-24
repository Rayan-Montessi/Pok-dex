/*Cores do nome dos tipos*/
const coresTipos = {
  Normal: "#A8A77A",
  Fogo: "#EE8130",
  Água: "#6390F0",
  Elétrico: "#F7D02C",
  Grama: "#7AC74C",
  Gelo: "#96D9D6",
  Lutador: "#C22E28",
  Veneno: "#A33EA1",
  Terra: "#E2BF65",
  Voador: "#A98FF3",
  Psíquico: "#F95587",
  Inseto: "#A6B91A",
  Pedra: "#B6A136",
  Fantasma: "#735797",
  Dragão: "#6F35FC",
  Sombrio: "#705746",
  Aço: "#B7B7CE",
  Fada: "#D685AD",
};

function colorirTipos(tipos) {
  return tipos
    .map((tipo) => `<span style="color: ${coresTipos[tipo]}">${tipo}</span>`)
    .join("/");
}

/*Aparece pokémons na lista dos 151 */
let lista = document.getElementById("lista");

function exibirPokemons(pokemons) {
  lista.innerHTML = "";

  if (pokemons.length === 0) {
    lista.innerHTML = `<p class="text">Nenhum Pokémon encontrado.</p>`;
    return;
  }

  pokemons.forEach((pokemon) => {
    lista.innerHTML += `
    <div class="pokemonlista">
    <button class="botaolista" onclick="adicionatime(${pokemon.numero})">
    <img src="${pokemon.imagem}" alt="${pokemon.nome}">
    <p class="text">${pokemon.nome}</p>
    <p class="text">${colorirTipos(pokemon.tipo)}</p>
    <p class="text">#${pokemon.numero}</p>
    </button>
    </div>
    `;
  });
}

/* Filtro e barra de pesquisa */
let filtroTipo = document.getElementById("filtroTipo");
let pesquisa = document.getElementById("pesquisa");

function filtrarPokemons() {
  let tipoSelecionado = filtroTipo.value;
  let textoDigitado = pesquisa.value.toLowerCase().trim();

  let filtrados = pokeBank.filter((pokemon) => {
    let tipoCorreto =
      tipoSelecionado === "Todos" || pokemon.tipo.includes(tipoSelecionado);

    let nomeCorreto = pokemon.nome.toLowerCase().includes(textoDigitado);

    return tipoCorreto && nomeCorreto;
  });

  exibirPokemons(filtrados);
}

filtroTipo.addEventListener("change", filtrarPokemons);
pesquisa.addEventListener("input", filtrarPokemons);
exibirPokemons(pokeBank);

/*Time*/
let time = new Array();
let meutime = document.getElementById("time");

function adicionatime(numero) {
  let pokemon = pokeBank.find((p) => p.numero === numero);
  if (time.length >= 6) {
    alert("Seu time já está completo!");
    return;
  }
  time.push(pokemon);
  meutime.innerHTML = "";

  time.forEach((pokemon) => {
    meutime.innerHTML += `
<div class= "pokemontime">
<button class = "botaotime" onclick = "removetime(${pokemon.numero})">
    <img src="${pokemon.imagem}" alt="${pokemon.nome}">
    <p class="text">${pokemon.nome}</p>
    <p class = "text">${colorirTipos(pokemon.tipo)}<p>
    <p class ="text"> #${pokemon.numero}</p>
</button>
</div>`;
  });
}

function removetime(numero) {
  let indice = time.findIndex((p) => p.numero === numero);

  if (indice !== -1) {
    time.splice(indice, 1);
  }
  meutime.innerHTML = "";

  time.forEach((pokemon) => {
    meutime.innerHTML += `
<div class= "pokemontime">
<button class = "botaotime" onclick = "removetime(${pokemon.numero})" >
    <img src="${pokemon.imagem}" alt="${pokemon.nome}">
    <p class="text">${pokemon.nome}</p>
    <p class = "text">${colorirTipos(pokemon.tipo)}<p>
    <p class ="text"> #${pokemon.numero}</p>
</button>
</div>`;
  });
}

/*Pequeno Easter egg */
function ativarFuncaoSecreta() {
  let pietro = document.getElementById("divlista");
  pietro.innerHTML = `
    
    <img id="pietroeasteregg" src="./extras/easter egg/pietro.jpg"> 
    `;
}

let easteregg = "pietro";
let sequenciadigitada = "";

window.addEventListener("keydown", (target) => {
  sequenciadigitada += target.key.toLowerCase();
  if (sequenciadigitada.length > easteregg.length) {
    sequenciadigitada = sequenciadigitada.slice(-easteregg.length);
  }
  if (sequenciadigitada === easteregg) {
    ativarFuncaoSecreta();
    sequenciadigitada = "";
  }
});
