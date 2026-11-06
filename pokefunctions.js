/*Aparece pokémons na lista dos 151 */
let lista = document.getElementById("lista")
pokeBank.forEach(pokemon => {
    lista.innerHTML += `
    <div class="pokemonlista">
    <button class="botaolista" onclick = "adicionatime(${pokemon.numero})">
    <img src="${pokemon.imagem}" alt="${pokemon.nome}">
    <p class="text">${pokemon.nome}</p>
    <p class ="text"> #${pokemon.numero}</p>
    </button>
    </div>
    `;
});

/*Time*/
let time = new Array()
let meutime = document.getElementById("time")

function adicionatime(numero){
let pokemon = pokeBank.find(p => p.numero === numero);
if(time.length >=6){
    alert("Seu time já está completo!")
    return
}
time.push(pokemon)
meutime.innerHTML = "";

time.forEach(pokemon=>{
meutime.innerHTML += `
<div class= "pokemontime">
<button class = "botaotime">
    <img src="${pokemon.imagem}" alt="${pokemon.nome}">
    <p class="text">${pokemon.nome}</p>
    <p class ="text"> #${pokemon.numero}</p>
</button>
</div>`
})}

/*Pequeno Easter egg */
function ativarFuncaoSecreta() {
    let pietro = document.getElementById("divlista")
    pietro.innerHTML = `
    
    <img id="pietroeasteregg" src="./extras/easter egg/pietro.jpg"> 
    `
}

let easteregg = "pietro"
let sequenciadigitada = ''


window.addEventListener("keydown", (target) => {
    sequenciadigitada += target.key.toLowerCase();
    if (sequenciadigitada.length > easteregg.length) {
        sequenciadigitada = sequenciadigitada.slice(-easteregg.length);
    }
    if (sequenciadigitada === easteregg) {
        ativarFuncaoSecreta();
        sequenciadigitada = '';
    }
    
})
