let lista = document.getElementById("lista")
pokeBank.forEach(pokemon => {
    lista.innerHTML += `
    <div class="pokemonlista">
    <p class="text">${pokemon.nome}</h2>
    <p class ="text"> #${pokemon.numero}</p>
    <button class="botaolista">
    <img src="${pokemon.imagem}" alt="${pokemon.nome}">
    </button>
    </div>
    `;
    });
