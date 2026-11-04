let lista = document.getElementById("lista")
pokeBank.forEach(pokemon => {
    lista.innerHTML += `
    <div class="pokemonlista">
    <button class="botaolista">
    <img src="${pokemon.imagem}" alt="${pokemon.nome}">
    <p class="text">${pokemon.nome}</p>
    <p class ="text"> #${pokemon.numero}</p>
    </button>
    </div>
    `;
    });

