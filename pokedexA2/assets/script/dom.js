pokemonList = []
const myPokemon = document.getElementById("my-pokemon");

const navButtons = document.getElementsByClassName("nav-button");

const trainerProfileButton = document.getElementById("trainer-profile-button");
const trainerProfileDetails = document.getElementById("trainer-profile-details");

const statsButton = document.getElementById("stats-button");
const statsP = statsButton.getElementsByTagName("p");
const statsIcon = statsButton.getElementsByClassName("stats-icon")[0];

class Pokemon {
    constructor(pokemonName, imgsrc, desc, types, stats) {
        this.pokemonName = pokemonName;
        this.imgsrc = imgsrc;
        this.desc = desc;
        this.types = types;
        this.stats = stats;
    }
}

function defaultPokemon() {
    const charmander = new Pokemon("Charmander",
        "assets/img/charmander.png",
        "Charmander is a bipedal, reptilian Pokemon with a primarily orange body and blue eyes.",
        ["Fire"],
        [39, 52, 43, 60, 50, 65]);
    const bulbasaur = new Pokemon("Bulbasaur",
        "assets/img/bulbasaur.png",
        "There is a plant seed on its back right from the day this Pokemon is born. The seed slowly grows larger.",
        ["Grass", "Poison"],
        [45, 49, 49, 65, 65, 45]);
    const squirtle = new Pokemon("Squirtle",
        "assets/img/squirtle.png",
        "Squirtle is a small Pokemon that resembles a light-blue turtle.  It has large, purplish or reddish eyes.",
        ["Water"],
        [44, 48, 65, 50, 64, 43]);
    pokemonList.push(charmander, bulbasaur, squirtle);
}
defaultPokemon();

currentButton=0;
for(let i=0;i<3;i++){
    navButtons[i].addEventListener("click",function(){
        if(!navButtons[i].classList.contains("nav-button-on")){
            navButtons[currentButton].classList.remove("nav-button-on");
            currentButton=i;
            navButtons[i].classList.add("nav-button-on");
        }
    });
}

trainerProfileButton.addEventListener("click", function () {
    if (trainerProfileButton.classList.contains("button-trainer-off")) {
        trainerProfileButton.classList.remove("button-trainer-off");
        trainerProfileButton.classList.add("button-trainer-on");

        trainerProfileDetails.classList.remove("hide");
    } else {
        trainerProfileButton.classList.remove("button-trainer-on");
        trainerProfileButton.classList.add("button-trainer-off");

        trainerProfileDetails.classList.add("hide");
    }
});

function makePokemonDesc(pokemon) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.setAttribute("src", pokemon.imgsrc);
    img.setAttribute("alt", pokemon.pokemonName.toLowerCase());
    figure.append(img);

    const pokemonName = document.createElement("h4");
    pokemonName.innerText = pokemon.pokemonName;

    const pokemonDesc = document.createElement("p");
    pokemonDesc.innerText = pokemon.desc;

    const pokemonTypes = document.createElement("div");
    pokemonTypes.classList.add("elements")
    for (type of pokemon.types) {
        const pokemonType = document.createElement("div");
        pokemonType.innerText = type;
        pokemonType.classList.add(type.toLowerCase());

        pokemonTypes.append(pokemonType);
    }

    return [figure, pokemonName, pokemonDesc, pokemonTypes];
}

function makePokemonStats(pokemon) {
    const statsHead = document.createElement("div");
    statsHead.classList.add("stats-head");

    const statsImg = document.createElement("img");
    statsImg.classList.add("stats-img");
    statsImg.setAttribute("src", pokemon.imgsrc);
    statsImg.setAttribute("alt", pokemon.pokemonName.toLowerCase());
    const statsName = document.createElement("h4");
    statsName.innerText = pokemon.pokemonName;

    statsHead.append(statsImg, statsName);

    // const statsData = document.createElement("div");
    // statsData.classList.add("stats-data");

    let listData = [];
    listData.push(["HP", "ATK", "DEF", "Sp.ATK", "Sp.DEF", "SPD"]);
    listData.push(pokemon.stats);

    const table = document.createElement("table")
    table.classList.add("stats-table");
    table.setAttribute("align", "center");
    for (let i = 0; i < 6; i++) {
        const trow = document.createElement("tr");
        trow.classList.add("table-row")

        const thead = document.createElement("th");
        thead.innerText = listData[0][i];

        const tstats = document.createElement("td");
        tstats.innerText = listData[1][i]

        const contbar = document.createElement("td");
        const tbar = document.createElement("div");
        tbar.classList.add("stats-bar");
        const width = 2 * listData[1][i];
        tbar.style.setProperty("width", width + "px");
        contbar.append(tbar);

        trow.append(thead, tstats, contbar);
        table.append(trow);
    }

    // for (let i = 0; i < 2; i++) {
    //     const column = document.createElement("div");
    //     column.classList.add("stats-column");
    //     for (data of listData[i]) {
    //         const dataElement = document.createElement("p");
    //         dataElement.innerText = data;
    //         column.append(dataElement);
    //     }
    //     statsData.append(column);
    // }

    // const barColumn = document.createElement("div");
    // barColumn.classList.add("bar-column");
    // // barColumn.classList.add("stats-column");
    // for (data of listData[1]){
    //     const div = document.createElement("div");
    //     div.classList.add("bar-div");
    //     const dataElement = document.createElement("div");
    //     dataElement.classList.add("stats-bar");
    //     const width = 2*data;
    //     dataElement.style.setProperty("width",width+"px")
    //     // dataElement.setAttribute("width",width+"px");

    //     div.append(dataElement);
    //     barColumn.append(div);
    // } statsData.append(barColumn);

    return [statsHead, table];



}

function makePokemonNav(index) {
    const pokemonNav = document.createElement("div");
    pokemonNav.classList.add("pokemon-nav");
    const pokemonLen = pokemonList.length;
    for (let i = 0; i < pokemonLen; i++) {
        const button = document.createElement("div");
        if (i == index) {
            button.classList.add("active-pokemon");
        } else {
            button.addEventListener("click", () => {
                changeMyPokemon(i);
            })
        }
        pokemonNav.append(button);
    }
    return pokemonNav;
}

changeMyPokemon(0);

function insertPokemonToMyPokemon(index) {
    let res = []
    const pokemon = pokemonList[index];
    if (statsButton.classList.contains("stats-off")) {
        res = makePokemonDesc(pokemon);
    } else {
        res = makePokemonStats(pokemon);
    }
    res.push(makePokemonNav(index));
    for (i of res) {
        myPokemon.append(i)
    }
}

function changeMyPokemon(index) {
    myPokemon.innerHTML = "";
    insertPokemonToMyPokemon(index);
}

const headings = document.getElementsByClassName("heading");
for (heading of headings) {
    let temp = heading
    const span = heading.getElementsByTagName("span")[0];
    document.addEventListener("scroll", function () {
        span.innerText = getSize(temp);
    })
}

function getSize(heading) {
    const parent = heading.parentElement;
    return window.getComputedStyle(parent).getPropertyValue("width");
}

function toggleStatsButton() {
    if (statsButton.classList.contains("stats-off")) {
        statsButton.classList.replace("stats-off", "stats-on");
        statsIcon.classList.replace("stats-icon-off", "stats-icon-on");
    } else {
        statsButton.classList.replace("stats-on", "stats-off");
        statsIcon.classList.replace("stats-icon-on", "stats-icon-off");
    }
}

statsButton.addEventListener("click", function () {
    toggleStatsButton();
    const pokemonNav = myPokemon.getElementsByClassName("pokemon-nav")[0].children;
    let index = -1;
    let j = 0
    for (i of pokemonNav) {
        if (i.classList.contains("active-pokemon")) {
            index = j;
            break;
        }
        j++;
    }
    changeMyPokemon(index)
})