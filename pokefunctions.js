let lista = document.getElementById("lista")
pokeBank.forEach(pokemon => {
    lista.innerHTML += `
    <div class="pokemonlista">
    <p class="text">${pokemon.nome}</h2>
    <p class ="text"> #${pokemon.numero}</p>
    <img src="${pokemon.imagem}" alt="${pokemon.nome}">
    </div>
    `;
    });
