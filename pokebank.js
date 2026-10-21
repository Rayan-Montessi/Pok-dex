class Pokemon{
    #nome;
    #numero;
    #tipo;
    #vantagens;
    #fraquezas;
    #imagem;

    constructor(nome, numero, tipo, vantagens, fraquezas, imagem){
        this.#nome = nome;
        this.#numero = numero;
        this.#tipo = tipo;
        this.#vantagens = vantagens;
        this.#fraquezas = fraquezas;
        this.#imagem = imagem;
    }

    get nome(){ return this.#nome }
    get numero(){ return this.#numero }
    get tipo(){ return this.#tipo }
    get vantagens(){ return this.#vantagens }
    get fraquezas(){ return this.#fraquezas }
    get imagem(){ return this.#imagem }
}

const bulbasaur = new Pokemon("Bulbasaur", 1, ["Grama", "Veneno"], ["Água", "Grama", "Terra", "Pedra", "Fada"], ["Fogo", "Gelo", "Voador", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png");

const ivysaur = new Pokemon("Ivysaur", 2, ["Grama", "Veneno"], ["Água", "Grama", "Terra", "Pedra", "Fada"], ["Fogo", "Gelo", "Voador", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png");

const venusaur = new Pokemon("Venusaur", 3, ["Grama", "Veneno"], ["Água", "Grama", "Terra", "Pedra", "Fada"], ["Fogo", "Gelo", "Voador", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png");

const charmander = new Pokemon("Charmander", 4, ["Fogo"], ["Grama", "Gelo", "Inseto", "Aço"], ["Água", "Terra", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png");

const charmeleon = new Pokemon("Charmeleon", 5, ["Fogo"], ["Grama", "Gelo", "Inseto", "Aço"], ["Água", "Terra", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png");

const charizard = new Pokemon("Charizard", 6, ["Fogo", "Voador"], ["Grama", "Gelo", "Lutador", "Inseto", "Aço"], ["Água", "Elétrico", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png");

const squirtle = new Pokemon("Squirtle", 7, ["Água"], ["Fogo", "Terra", "Pedra"], ["Elétrico", "Grama"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png");

const wartortle = new Pokemon("Wartortle", 8, ["Água"], ["Fogo", "Terra", "Pedra"], ["Elétrico", "Grama"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png");

const blastoise = new Pokemon("Blastoise", 9, ["Água"], ["Fogo", "Terra", "Pedra"], ["Elétrico", "Grama"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png");

const caterpie = new Pokemon("Caterpie", 10, ["Inseto"], ["Grama", "Psíquico", "Sombrio"], ["Fogo", "Voador", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png");

const metapod = new Pokemon("Metapod", 11, ["Inseto"], ["Grama", "Psíquico", "Sombrio"], ["Fogo", "Voador", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png");

const butterfree = new Pokemon("Butterfree", 12, ["Inseto", "Voador"], ["Grama", "Lutador", "Psíquico", "Inseto", "Sombrio"], ["Fogo", "Elétrico", "Gelo", "Voador", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png");

const weedle = new Pokemon("Weedle", 13, ["Inseto", "Veneno"], ["Grama", "Psíquico", "Sombrio", "Fada"], ["Fogo", "Voador", "Psíquico", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png");

const kakuna = new Pokemon("Kakuna", 14, ["Inseto", "Veneno"], ["Grama", "Psíquico", "Sombrio", "Fada"], ["Fogo", "Voador", "Psíquico", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png");

const beedrill = new Pokemon("Beedrill", 15, ["Inseto", "Veneno"], ["Grama", "Psíquico", "Sombrio", "Fada"], ["Fogo", "Voador", "Psíquico", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png");

const pidgey = new Pokemon("Pidgey", 16, ["Normal", "Voador"], ["Grama", "Lutador", "Inseto"], ["Elétrico", "Gelo", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png");

const pidgeotto = new Pokemon("Pidgeotto", 17, ["Normal", "Voador"], ["Grama", "Lutador", "Inseto"], ["Elétrico", "Gelo", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png");

const pidgeot = new Pokemon("Pidgeot", 18, ["Normal", "Voador"], ["Grama", "Lutador", "Inseto"], ["Elétrico", "Gelo", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png");

const rattata = new Pokemon("Rattata", 19, ["Normal"], [], ["Lutador"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png");

const raticate = new Pokemon("Raticate", 20, ["Normal"], [], ["Lutador"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png");

const spearow = new Pokemon("Spearow", 21, ["Normal", "Voador"], ["Grama", "Lutador", "Inseto"], ["Elétrico", "Gelo", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png");

const fearow = new Pokemon("Fearow", 22, ["Normal", "Voador"], ["Grama", "Lutador", "Inseto"], ["Elétrico", "Gelo", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png");

const ekans = new Pokemon("Ekans", 23, ["Veneno"], ["Grama", "Fada"], ["Terra", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png");

const arbok = new Pokemon("Arbok", 24, ["Veneno"], ["Grama", "Fada"], ["Terra", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png");

const pikachu = new Pokemon("Pikachu", 25, ["Elétrico"], ["Água", "Voador"], ["Terra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png");

const raichu = new Pokemon("Raichu", 26, ["Elétrico"], ["Água", "Voador"], ["Terra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png");

const sandshrew = new Pokemon("Sandshrew", 27, ["Terra"], ["Fogo", "Elétrico", "Veneno", "Pedra", "Aço"], ["Água", "Grama", "Gelo"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png");

const sandslash = new Pokemon("Sandslash", 28, ["Terra"], ["Fogo", "Elétrico", "Veneno", "Pedra", "Aço"], ["Água", "Grama", "Gelo"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png");

const nidoranf = new Pokemon("Nidoran♀", 29, ["Veneno"], ["Grama", "Fada"], ["Terra", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png");

const nidorina = new Pokemon("Nidorina", 30, ["Veneno"], ["Grama", "Fada"], ["Terra", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png");

const nidoqueen = new Pokemon("Nidoqueen", 31, ["Veneno", "Terra"], ["Fogo", "Elétrico", "Grama", "Veneno", "Pedra", "Aço", "Fada"], ["Água", "Gelo", "Terra", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png");

const nidoran = new Pokemon("Nidoran♂", 32, ["Veneno"], ["Grama", "Fada"], ["Terra", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png");

const nidorino = new Pokemon("Nidorino", 33, ["Veneno"], ["Grama", "Fada"], ["Terra", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png");

const nidoking = new Pokemon("Nidoking", 34, ["Veneno", "Terra"], ["Fogo", "Elétrico", "Grama", "Veneno", "Pedra", "Aço", "Fada"], ["Água", "Gelo", "Terra", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png");

const clefairy = new Pokemon("Clefairy", 35, ["Fada"], ["Lutador", "Dragão", "Sombrio"], ["Veneno", "Aço"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png");

const clefable = new Pokemon("Clefable", 36, ["Fada"], ["Lutador", "Dragão", "Sombrio"], ["Veneno", "Aço"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png");

const vulpix = new Pokemon("Vulpix", 37, ["Fogo"], ["Grama", "Gelo", "Inseto", "Aço"], ["Água", "Terra", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png");

const ninetales = new Pokemon("Ninetales", 38, ["Fogo"], ["Grama", "Gelo", "Inseto", "Aço"], ["Água", "Terra", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png");

const jigglypuff = new Pokemon("Jigglypuff", 39, ["Normal", "Fada"], ["Lutador", "Dragão", "Sombrio"], ["Veneno", "Aço"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png");

const wigglytuff = new Pokemon("Wigglytuff", 40, ["Normal", "Fada"], ["Lutador", "Dragão", "Sombrio"], ["Veneno", "Aço"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png");

const zubat = new Pokemon("Zubat", 41, ["Veneno", "Voador"], ["Grama", "Lutador", "Inseto", "Fada"], ["Elétrico", "Gelo", "Psíquico", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png");

const golbat = new Pokemon("Golbat", 42, ["Veneno", "Voador"], ["Grama", "Lutador", "Inseto", "Fada"], ["Elétrico", "Gelo", "Psíquico", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png");

const oddish = new Pokemon("Oddish", 43, ["Grama", "Veneno"], ["Água", "Grama", "Terra", "Pedra", "Fada"], ["Fogo", "Gelo", "Voador", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png");

const gloom = new Pokemon("Gloom", 44, ["Grama", "Veneno"], ["Água", "Grama", "Terra", "Pedra", "Fada"], ["Fogo", "Gelo", "Voador", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png");

const vileplume = new Pokemon("Vileplume", 45, ["Grama", "Veneno"], ["Água", "Grama", "Terra", "Pedra", "Fada"], ["Fogo", "Gelo", "Voador", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png");

const paras = new Pokemon("Paras", 46, ["Inseto", "Grama"], ["Água", "Grama", "Terra", "Psíquico", "Pedra", "Sombrio"], ["Fogo", "Gelo", "Veneno", "Voador", "Inseto", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png");

const parasect = new Pokemon("Parasect", 47, ["Inseto", "Grama"], ["Água", "Grama", "Terra", "Psíquico", "Pedra", "Sombrio"], ["Fogo", "Gelo", "Veneno", "Voador", "Inseto", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png");

const venonat = new Pokemon("Venonat", 48, ["Inseto", "Veneno"], ["Grama", "Psíquico", "Sombrio", "Fada"], ["Fogo", "Voador", "Psíquico", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png");

const venomoth = new Pokemon("Venomoth", 49, ["Inseto", "Veneno"], ["Grama", "Psíquico", "Sombrio", "Fada"], ["Fogo", "Voador", "Psíquico", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png");

const diglett = new Pokemon("Diglett", 50, ["Terra"], ["Fogo", "Elétrico", "Veneno", "Pedra", "Aço"], ["Água", "Grama", "Gelo"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png");

const dugtrio = new Pokemon("Dugtrio", 51, ["Terra"], ["Fogo", "Elétrico", "Veneno", "Pedra", "Aço"], ["Água", "Grama", "Gelo"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png");

const meowth = new Pokemon("Meowth", 52, ["Normal"], [], ["Lutador"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png");

const persian = new Pokemon("Persian", 53, ["Normal"], [], ["Lutador"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png");

const psyduck = new Pokemon("Psyduck", 54, ["Água"], ["Fogo", "Terra", "Pedra"], ["Elétrico", "Grama"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png");

const golduck = new Pokemon("Golduck", 55, ["Água"], ["Fogo", "Terra", "Pedra"], ["Elétrico", "Grama"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png");

const mankey = new Pokemon("Mankey", 56, ["Lutador"], ["Normal", "Gelo", "Pedra", "Sombrio", "Aço"], ["Voador", "Psíquico", "Fada"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png");

const primeape = new Pokemon("Primeape", 57, ["Lutador"], ["Normal", "Gelo", "Pedra", "Sombrio", "Aço"], ["Voador", "Psíquico", "Fada"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png");

const growlithe = new Pokemon("Growlithe", 58, ["Fogo"], ["Grama", "Gelo", "Inseto", "Aço"], ["Água", "Terra", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png");

const arcanine = new Pokemon("Arcanine", 59, ["Fogo"], ["Grama", "Gelo", "Inseto", "Aço"], ["Água", "Terra", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png");

const poliwag = new Pokemon("Poliwag", 60, ["Água"], ["Fogo", "Terra", "Pedra"], ["Elétrico", "Grama"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png");

const poliwhirl = new Pokemon("Poliwhirl", 61, ["Água"], ["Fogo", "Terra", "Pedra"], ["Elétrico", "Grama"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png");

const poliwrath = new Pokemon("Poliwrath", 62, ["Água", "Lutador"], ["Normal", "Fogo", "Gelo", "Terra", "Pedra", "Sombrio", "Aço"], ["Elétrico", "Grama", "Voador", "Psíquico", "Fada"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png");

const abra = new Pokemon("Abra", 63, ["Psíquico"], ["Lutador", "Veneno"], ["Inseto", "Fantasma", "Sombrio"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png");

const kadabra = new Pokemon("Kadabra", 64, ["Psíquico"], ["Lutador", "Veneno"], ["Inseto", "Fantasma", "Sombrio"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png");

const alakazam = new Pokemon("Alakazam", 65, ["Psíquico"], ["Lutador", "Veneno"], ["Inseto", "Fantasma", "Sombrio"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png");

const machop = new Pokemon("Machop", 66, ["Lutador"], ["Normal", "Gelo", "Pedra", "Sombrio", "Aço"], ["Voador", "Psíquico", "Fada"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png");

const machoke = new Pokemon("Machoke", 67, ["Lutador"], ["Normal", "Gelo", "Pedra", "Sombrio", "Aço"], ["Voador", "Psíquico", "Fada"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png");

const machamp = new Pokemon("Machamp", 68, ["Lutador"], ["Normal", "Gelo", "Pedra", "Sombrio", "Aço"], ["Voador", "Psíquico", "Fada"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png");

const bellsprout = new Pokemon("Bellsprout", 69, ["Grama", "Veneno"], ["Água", "Grama", "Terra", "Pedra", "Fada"], ["Fogo", "Gelo", "Voador", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png");

const weepinbell = new Pokemon("Weepinbell", 70, ["Grama", "Veneno"], ["Água", "Grama", "Terra", "Pedra", "Fada"], ["Fogo", "Gelo", "Voador", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png");

const victreebel = new Pokemon("Victreebel", 71, ["Grama", "Veneno"], ["Água", "Grama", "Terra", "Pedra", "Fada"], ["Fogo", "Gelo", "Voador", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png");

const tentacool = new Pokemon("Tentacool", 72, ["Água", "Veneno"], ["Fogo", "Grama", "Terra", "Pedra", "Fada"], ["Elétrico", "Terra", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png");

const tentacruel = new Pokemon("Tentacruel", 73, ["Água", "Veneno"], ["Fogo", "Grama", "Terra", "Pedra", "Fada"], ["Elétrico", "Terra", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png");

const geodude = new Pokemon("Geodude", 74, ["Pedra", "Terra"], ["Fogo", "Elétrico", "Gelo", "Veneno", "Voador", "Inseto", "Pedra", "Aço"], ["Água", "Grama", "Gelo", "Lutador", "Terra", "Aço"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png");

const graveler = new Pokemon("Graveler", 75, ["Pedra", "Terra"], ["Fogo", "Elétrico", "Gelo", "Veneno", "Voador", "Inseto", "Pedra", "Aço"], ["Água", "Grama", "Gelo", "Lutador", "Terra", "Aço"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png");

const golem = new Pokemon("Golem", 76, ["Pedra", "Terra"], ["Fogo", "Elétrico", "Gelo", "Veneno", "Voador", "Inseto", "Pedra", "Aço"], ["Água", "Grama", "Gelo", "Lutador", "Terra", "Aço"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png");

const ponyta = new Pokemon("Ponyta", 77, ["Fogo"], ["Grama", "Gelo", "Inseto", "Aço"], ["Água", "Terra", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png");

const rapidash = new Pokemon("Rapidash", 78, ["Fogo"], ["Grama", "Gelo", "Inseto", "Aço"], ["Água", "Terra", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png");

const slowpoke = new Pokemon("Slowpoke", 79, ["Água", "Psíquico"], ["Fogo", "Lutador", "Veneno", "Terra", "Pedra"], ["Elétrico", "Grama", "Inseto", "Fantasma", "Sombrio"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png");

const slowbro = new Pokemon("Slowbro", 80, ["Água", "Psíquico"], ["Fogo", "Lutador", "Veneno", "Terra", "Pedra"], ["Elétrico", "Grama", "Inseto", "Fantasma", "Sombrio"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png");

const magnemite = new Pokemon("Magnemite", 81, ["Elétrico", "Aço"], ["Água", "Gelo", "Voador", "Pedra", "Fada"], ["Fogo", "Lutador", "Terra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png");

const magneton = new Pokemon("Magneton", 82, ["Elétrico", "Aço"], ["Água", "Gelo", "Voador", "Pedra", "Fada"], ["Fogo", "Lutador", "Terra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png");

const farfetchd = new Pokemon("Farfetch'd", 83, ["Normal", "Voador"], ["Grama", "Lutador", "Inseto"], ["Elétrico", "Gelo", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png");

const doduo = new Pokemon("Doduo", 84, ["Normal", "Voador"], ["Grama", "Lutador", "Inseto"], ["Elétrico", "Gelo", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png");

const dodrio = new Pokemon("Dodrio", 85, ["Normal", "Voador"], ["Grama", "Lutador", "Inseto"], ["Elétrico", "Gelo", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png");

const seel = new Pokemon("Seel", 86, ["Água"], ["Fogo", "Terra", "Pedra"], ["Elétrico", "Grama"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png");

const dewgong = new Pokemon("Dewgong", 87, ["Água", "Gelo"], ["Fogo", "Grama", "Terra", "Voador", "Pedra", "Dragão"], ["Elétrico", "Grama", "Lutador", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png");

const grimer = new Pokemon("Grimer", 88, ["Veneno"], ["Grama", "Fada"], ["Terra", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png");

const muk = new Pokemon("Muk", 89, ["Veneno"], ["Grama", "Fada"], ["Terra", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png");

const shellder = new Pokemon("Shellder", 90, ["Água"], ["Fogo", "Terra", "Pedra"], ["Elétrico", "Grama"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png");

const cloyster = new Pokemon("Cloyster", 91, ["Água", "Gelo"], ["Fogo", "Grama", "Terra", "Voador", "Pedra", "Dragão"], ["Elétrico", "Grama", "Lutador", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png");

const gastly = new Pokemon("Gastly", 92, ["Fantasma", "Veneno"], ["Grama", "Psíquico", "Fantasma", "Fada"], ["Terra", "Psíquico", "Fantasma", "Sombrio"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png");

const haunter = new Pokemon("Haunter", 93, ["Fantasma", "Veneno"], ["Grama", "Psíquico", "Fantasma", "Fada"], ["Terra", "Psíquico", "Fantasma", "Sombrio"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png");

const gengar = new Pokemon("Gengar", 94, ["Fantasma", "Veneno"], ["Grama", "Psíquico", "Fantasma", "Fada"], ["Terra", "Psíquico", "Fantasma", "Sombrio"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png");

const onix = new Pokemon("Onix", 95, ["Pedra", "Terra"], ["Fogo", "Elétrico", "Gelo", "Veneno", "Voador", "Inseto", "Pedra", "Aço"], ["Água", "Grama", "Gelo", "Lutador", "Terra", "Aço"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png");

const drowzee = new Pokemon("Drowzee", 96, ["Psíquico"], ["Lutador", "Veneno"], ["Inseto", "Fantasma", "Sombrio"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png");

const hypno = new Pokemon("Hypno", 97, ["Psíquico"], ["Lutador", "Veneno"], ["Inseto", "Fantasma", "Sombrio"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png");

const krabby = new Pokemon("Krabby", 98, ["Água"], ["Fogo", "Terra", "Pedra"], ["Elétrico", "Grama"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png");

const kingler = new Pokemon("Kingler", 99, ["Água"], ["Fogo", "Terra", "Pedra"], ["Elétrico", "Grama"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png");

const voltorb = new Pokemon("Voltorb", 100, ["Elétrico"], ["Água", "Voador"], ["Terra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png");

const electrode = new Pokemon("Electrode", 101, ["Elétrico"], ["Água", "Voador"], ["Terra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png");

const exeggcute = new Pokemon("Exeggcute", 102, ["Grama", "Psíquico"], ["Água", "Lutador", "Veneno", "Terra", "Pedra"], ["Fogo", "Gelo", "Veneno", "Voador", "Inseto", "Fantasma", "Sombrio"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png");

const exeggutor = new Pokemon("Exeggutor", 103, ["Grama", "Psíquico"], ["Água", "Lutador", "Veneno", "Terra", "Pedra"], ["Fogo", "Gelo", "Veneno", "Voador", "Inseto", "Fantasma", "Sombrio"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png");

const cubone = new Pokemon("Cubone", 104, ["Terra"], ["Fogo", "Elétrico", "Veneno", "Pedra", "Aço"], ["Água", "Grama", "Gelo"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png");

const marowak = new Pokemon("Marowak", 105, ["Terra"], ["Fogo", "Elétrico", "Veneno", "Pedra", "Aço"], ["Água", "Grama", "Gelo"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png");

const hitmonlee = new Pokemon("Hitmonlee", 106, ["Lutador"], ["Normal", "Gelo", "Pedra", "Sombrio", "Aço"], ["Voador", "Psíquico", "Fada"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png");

const hitmonchan = new Pokemon("Hitmonchan", 107, ["Lutador"], ["Normal", "Gelo", "Pedra", "Sombrio", "Aço"], ["Voador", "Psíquico", "Fada"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png");

const lickitung = new Pokemon("Lickitung", 108, ["Normal"], [], ["Lutador"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png");

const koffing = new Pokemon("Koffing", 109, ["Veneno"], ["Grama", "Fada"], ["Terra", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png");

const weezing = new Pokemon("Weezing", 110, ["Veneno"], ["Grama", "Fada"], ["Terra", "Psíquico"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png");

const rhyhorn = new Pokemon("Rhyhorn", 111, ["Terra", "Pedra"], ["Fogo", "Elétrico", "Gelo", "Veneno", "Voador", "Inseto", "Pedra", "Aço"], ["Água", "Grama", "Gelo", "Lutador", "Terra", "Aço"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png");

const rhydon = new Pokemon("Rhydon", 112, ["Terra", "Pedra"], ["Fogo", "Elétrico", "Gelo", "Veneno", "Voador", "Inseto", "Pedra", "Aço"], ["Água", "Grama", "Gelo", "Lutador", "Terra", "Aço"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png");

const chansey = new Pokemon("Chansey", 113, ["Normal"], [], ["Lutador"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png");

const tangela = new Pokemon("Tangela", 114, ["Grama"], ["Água", "Terra", "Pedra"], ["Fogo", "Gelo", "Veneno", "Voador", "Inseto"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png");

const kangaskhan = new Pokemon("Kangaskhan", 115, ["Normal"], [], ["Lutador"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png");

const horsea = new Pokemon("Horsea", 116, ["Água"], ["Fogo", "Terra", "Pedra"], ["Elétrico", "Grama"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png");

const seadra = new Pokemon("Seadra", 117, ["Água"], ["Fogo", "Terra", "Pedra"], ["Elétrico", "Grama"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png");

const goldeen = new Pokemon("Goldeen", 118, ["Água"], ["Fogo", "Terra", "Pedra"], ["Elétrico", "Grama"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png");

const seaking = new Pokemon("Seaking", 119, ["Água"], ["Fogo", "Terra", "Pedra"], ["Elétrico", "Grama"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png");

const staryu = new Pokemon("Staryu", 120, ["Água"], ["Fogo", "Terra", "Pedra"], ["Elétrico", "Grama"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png");

const starmie = new Pokemon("Starmie", 121, ["Água", "Psíquico"], ["Fogo", "Lutador", "Veneno", "Terra", "Pedra"], ["Elétrico", "Grama", "Inseto", "Fantasma", "Sombrio"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png");

const mrmime = new Pokemon("Mr. Mime", 122, ["Psíquico", "Fada"], ["Lutador", "Veneno", "Dragão", "Sombrio"], ["Veneno", "Fantasma", "Aço"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png");

const scyther = new Pokemon("Scyther", 123, ["Inseto", "Voador"], ["Grama", "Lutador", "Psíquico", "Inseto", "Sombrio"], ["Fogo", "Elétrico", "Gelo", "Voador", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png");

const jynx = new Pokemon("Jynx", 124, ["Gelo", "Psíquico"], ["Grama", "Lutador", "Veneno", "Terra", "Voador", "Dragão"], ["Fogo", "Inseto", "Pedra", "Fantasma", "Sombrio", "Aço"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png");

const electabuzz = new Pokemon("Electabuzz", 125, ["Elétrico"], ["Água", "Voador"], ["Terra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png");

const magmar = new Pokemon("Magmar", 126, ["Fogo"], ["Grama", "Gelo", "Inseto", "Aço"], ["Água", "Terra", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png");

const pinsir = new Pokemon("Pinsir", 127, ["Inseto"], ["Grama", "Psíquico", "Sombrio"], ["Fogo", "Voador", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png");

const tauros = new Pokemon("Tauros", 128, ["Normal"], [], ["Lutador"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png");

const magikarp = new Pokemon("Magikarp", 129, ["Água"], ["Fogo", "Terra", "Pedra"], ["Elétrico", "Grama"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png");

const gyarados = new Pokemon("Gyarados", 130, ["Água", "Voador"], ["Fogo", "Grama", "Lutador", "Terra", "Inseto", "Pedra"], ["Elétrico", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png");

const lapras = new Pokemon("Lapras", 131, ["Água", "Gelo"], ["Fogo", "Grama", "Terra", "Voador", "Pedra", "Dragão"], ["Elétrico", "Grama", "Lutador", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png");

const ditto = new Pokemon("Ditto", 132, ["Normal"], [], ["Lutador"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png");

const eevee = new Pokemon("Eevee", 133, ["Normal"], [], ["Lutador"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png");

const vaporeon = new Pokemon("Vaporeon", 134, ["Água"], ["Fogo", "Terra", "Pedra"], ["Elétrico", "Grama"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png");

const jolteon = new Pokemon("Jolteon", 135, ["Elétrico"], ["Água", "Voador"], ["Terra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png");

const flareon = new Pokemon("Flareon", 136, ["Fogo"], ["Grama", "Gelo", "Inseto", "Aço"], ["Água", "Terra", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png");

const porygon = new Pokemon("Porygon", 137, ["Normal"], [], ["Lutador"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png");

const omanyte = new Pokemon("Omanyte", 138, ["Pedra", "Água"], ["Fogo", "Gelo", "Terra", "Voador", "Inseto", "Pedra"], ["Elétrico", "Grama", "Lutador", "Terra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png");

const omastar = new Pokemon("Omastar", 139, ["Pedra", "Água"], ["Fogo", "Gelo", "Terra", "Voador", "Inseto", "Pedra"], ["Elétrico", "Grama", "Lutador", "Terra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png");

const kabuto = new Pokemon("Kabuto", 140, ["Pedra", "Água"], ["Fogo", "Gelo", "Terra", "Voador", "Inseto", "Pedra"], ["Elétrico", "Grama", "Lutador", "Terra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png");

const kabutops = new Pokemon("Kabutops", 141, ["Pedra", "Água"], ["Fogo", "Gelo", "Terra", "Voador", "Inseto", "Pedra"], ["Elétrico", "Grama", "Lutador", "Terra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png");

const aerodactyl = new Pokemon("Aerodactyl", 142, ["Pedra", "Voador"], ["Fogo", "Grama", "Gelo", "Lutador", "Voador", "Inseto"], ["Água", "Elétrico", "Gelo", "Pedra", "Aço"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png");

const snorlax = new Pokemon("Snorlax", 143, ["Normal"], [], ["Lutador"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png");

const articuno = new Pokemon("Articuno", 144, ["Gelo", "Voador"], ["Grama", "Lutador", "Terra", "Voador", "Inseto", "Dragão"], ["Fogo", "Elétrico", "Pedra", "Aço"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png");

const zapdos = new Pokemon("Zapdos", 145, ["Elétrico", "Voador"], ["Água", "Grama", "Lutador", "Voador", "Inseto"], ["Gelo", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png");

const moltres = new Pokemon("Moltres", 146, ["Fogo", "Voador"], ["Grama", "Gelo", "Lutador", "Inseto", "Aço"], ["Água", "Elétrico", "Pedra"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png");

const dratini = new Pokemon("Dratini", 147, ["Dragão"], ["Dragão"], ["Gelo", "Dragão", "Fada"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png");

const dragonair = new Pokemon("Dragonair", 148, ["Dragão"], ["Dragão"], ["Gelo", "Dragão", "Fada"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png");

const dragonite = new Pokemon("Dragonite", 149, ["Dragão", "Voador"], ["Grama", "Lutador", "Inseto", "Dragão"], ["Gelo", "Pedra", "Dragão", "Fada"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png");

const mewtwo = new Pokemon("Mewtwo", 150, ["Psíquico"], ["Lutador", "Veneno"], ["Inseto", "Fantasma", "Sombrio"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png");

const mew = new Pokemon("Mew", 151, ["Psíquico"], ["Lutador", "Veneno"], ["Inseto", "Fantasma", "Sombrio"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png");
