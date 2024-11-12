const tipo1 = document.querySelector("#Tipo1");
const tipo2 = document.querySelector("#Tipo2");
const imgPokemon = document.querySelector("#imgPokemon");
const idPokemon = document.querySelector("#idPokemon");
const nomePokemon = document.querySelector("#nomePokemon");
const pesoPokemon = document.querySelector("#pesoPokemon");
const alturaPokemon = document.querySelector("#alturaPokemon")
const audioPokemon = document.querySelector("#audioPokemon")
const input = document.querySelector("#inputNome")
const formNome = document.querySelector("#formNome")
const btnA = document.querySelector("#btnA")
const btnB = document.querySelector("#btnB")

let idPoke = 1

const fetchPokemon =  async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await APIresponse.json()
    return data
}


const showPokemon = async (pokemon) => {
    const infoPokemon = await fetchPokemon(pokemon);
    idPoke = infoPokemon.id;
    idPokemon.innerHTML = infoPokemon.id;
    nomePokemon.innerHTML = infoPokemon.name;
    imgPokemon.src = infoPokemon.sprites.front_default;
    tipo1.innerHTML = infoPokemon.types[0].type.name;
    tipo2.innerHTML =''
    tipo2.innerHTML = infoPokemon.types[1].type.name;
    audioPokemon.src = infoPokemon.cries.latest;
    pesoPokemon.innerHTML = (infoPokemon.weight * 0.453592).toFixed(1)
    alturaPokemon.innerHTML = (infoPokemon.height * 0.3048).toFixed(1)
    audioPokemon.play();

};

formNome.addEventListener("submit", (event) =>{
    event.preventDefault()
    showPokemon(input.value.toLowerCase())
})

btnA.addEventListener("click", (event) =>{
    event.preventDefault()
    if(idPoke>1){
        idPoke -=1
        showPokemon(idPoke)
    }
})

btnB.addEventListener("click", (event) =>{
    event.preventDefault()
    idPoke++
    showPokemon(idPoke)

})

showPokemon(idPoke)