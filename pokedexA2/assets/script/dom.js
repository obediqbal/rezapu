pokemonList = []
myPokemon = document.getElementById("my-pokemon");

class Pokemon {
    constructor(pokemonName, imgsrc,desc,types) {
        this.pokemonName = pokemonName;
        this.imgsrc = imgsrc;
        this.desc = desc;
        this.types = types;
    }
}

function defaultPokemon() {
    const charmeleon = new Pokemon("Charmeleon",
                                    "assets/img/charmeleon.png",
                                    "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive.",
                                    ["Fire"]);
    const bulbasaur = new Pokemon("Bulbasaur",
                                    "assets/img/bulbasaur.png",
                                    "There is a plant seed on its back right from the day this Pokemon is born. The seed slowly grows larger.",
                                    ["Grass", "Poison"]);
    pokemonList.push(charmeleon,bulbasaur);
}
defaultPokemon();

insertPokemonToMyPokemon(1);
function insertPokemonToMyPokemon(index) {
    const pokemonI = pokemonList[index];

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.setAttribute("src",pokemonI.imgsrc);
    img.setAttribute("alt",pokemonI.pokemonName.toLowerCase());
    figure.append(img);

    const pokemonName = document.createElement("h4");
    pokemonName.innerText = pokemonI.pokemonName;

    const pokemonDesc = document.createElement("p");
    pokemonDesc.innerText = pokemonI.desc;

    const pokemonTypes = document.createElement("div");
    pokemonTypes.classList.add("elements")
    for (type of pokemonI.types){
        const pokemonType = document.createElement("div");
        pokemonType.innerText = type;
        pokemonType.classList.add(type.toLowerCase());

        pokemonTypes.append(pokemonType);
    }

    const pokemonNav = document.createElement("div");
    pokemonNav.classList.add("pokemon-nav");
    const pokemonLen = pokemonList.length;
    for(let i=0;i<pokemonLen;i++){
        const button = document.createElement("div");
        if (i==index){
            button.classList.add("active-pokemon");
        }
        else {
            button.addEventListener("click",()=>{
                changeMyPokemon(i);
            })
        }
        pokemonNav.append(button);
    }

    myPokemon.append(figure, pokemonName, pokemonDesc,pokemonTypes,pokemonNav);
}

function changeMyPokemon(index){
    myPokemon.innerHTML = "";
    insertPokemonToMyPokemon(index);
}