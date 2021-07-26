const myPokemon = document.getElementById("my-pokemon");
const myPokemonBottom = document.getElementById("my-pokemon-bottom")

const navButtons = document.getElementsByClassName("nav-button");

const trainerProfilePreview = document.getElementById("trainer-profile-preview");
const trainerProfileDetails = document.getElementById("trainer-profile-details");

const dashboard = document.getElementById("dashboard");
const store = document.getElementById("store");

const statsButton = document.getElementById("stats-button");
const statsP = statsButton.getElementsByTagName("p");
const statsIcon = statsButton.getElementsByClassName("stats-icon")[0];

function currency(num) {
    let s = "";

    n = parseInt(String(num).length/3);
    if(String(num).length%3) n++;

    do{

        let temp = String(num % 1000);
        num /= 1000
        num = parseInt(num)
        while (temp.length < 3 && parseInt(num)>0) {
            temp = "0" + temp;
        }
        temp = "." + temp;
        s = temp + s;
        n--;
    }
    while(n>0)
    s = s.slice(1, s.length);
    s = "Rp" + s;
    s = s + ",00";
    return s;
}

function trainerProfileGenerator(trainer) {
    const trainerPicture = document.getElementById("trainer-picture");
    const trainerPicturePreview = document.getElementById("trainer-picture-preview");
    const trainerUsername = document.getElementById("trainer-username");
    const trainerName = document.getElementById("trainer-name");
    const trainerRank = document.getElementById("trainer-rank");
    const trainerEmail = document.getElementById("trainer-email");
    const trainerBalance = document.getElementById("trainer-balance");
    const trainerPokemonTotal = document.getElementById("trainer-pokemon-total");

    trainerPicture.setAttribute("src", trainer.imgProfile);
    trainerPicturePreview.setAttribute("src", trainer.imgProfile);

    trainerUsername.innerText = trainer.username;
    trainerName.innerText = trainer.trainerName;
    trainerRank.innerText = trainer.rank;
    trainerEmail.innerText = trainer.email;
    trainerBalance.innerText = currency(trainer.balance);
    trainerPokemonTotal.innerText = trainer.pokemonList.length + " Pokemon";
}

trainerProfileGenerator(defaultTrainer)

function resetNavButton() {
    switchOffNavButton(0);
    switchOffNavButton(1);
}

const navIcons = document.getElementsByClassName("nav-icon");

function switchOffNavButton(i) {
    if (i == 0) {
        navIcons[i].classList.remove("nav-dashboard-icon-on");
        navIcons[i].classList.add("nav-dashboard-icon-off");
        dashboard.classList.add("hide");
    } else if (i == 1) {
        navIcons[i].classList.remove("nav-store-icon-on");
        navIcons[i].classList.add("nav-store-icon-off");
        store.classList.add("hide");
    } else {
        navIcons[i].classList.remove("nav-profile-icon-on");
        navIcons[i].classList.add("nav-profile-icon-off");
        trainerProfileDetails.classList.add("hide");
    }
    navButtons[i].classList.remove("nav-button-on")
}

function switchOnNavButton(i) {
    if (i == 0) {
        navIcons[i].classList.remove("nav-dashboard-icon-off");
        navIcons[i].classList.add("nav-dashboard-icon-on");
        dashboard.classList.remove("hide");
    } else if (i == 1) {
        navIcons[i].classList.remove("nav-store-icon-off");
        navIcons[i].classList.add("nav-store-icon-on");
        store.classList.remove("hide");
    } else {
        navIcons[i].classList.remove("nav-profile-icon-off");
        navIcons[i].classList.add("nav-profile-icon-on");
        trainerProfileDetails.classList.remove("hide");
    }
    navButtons[i].classList.add("nav-button-on")
}

function toggleProfile() {
    if (trainerProfilePreview.classList.contains("button-trainer-off")) {
        switchOnNavButton(2);

        trainerProfilePreview.classList.remove("button-trainer-off");
        trainerProfilePreview.classList.add("button-trainer-on");
    } else {
        switchOffNavButton(2);

        trainerProfilePreview.classList.remove("button-trainer-on");
        trainerProfilePreview.classList.add("button-trainer-off");
    }
}

for (let i = 0; i < 2; i++) {
    navButtons[i].addEventListener("click", function () {
        if (!navButtons[i].classList.contains("nav-button-on")) {
            resetNavButton();
            switchOnNavButton(i)
        }
    });
}

navButtons[2].addEventListener("click", function () {
    toggleProfile()
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

    return [statsHead, table];
}

function makePokemonNav(index, trainer) {
    const pokemonNav = document.createElement("div");
    pokemonNav.classList.add("pokemon-nav");
    const pokemonLen = trainer.pokemonList.length;
    for (let i = 0; i < pokemonLen; i++) {
        const button = document.createElement("div");
        if (i == index) {
            button.classList.add("active-pokemon");
        } else {
            button.addEventListener("click", () => {
                changeMyPokemon(i, trainer);
            })
        }
        pokemonNav.append(button);
    }
    return pokemonNav;
}

changeMyPokemon(0, defaultTrainer);

function insertPokemonToMyPokemon(index, trainer) {
    let res = []
    let temp;
    const pokemon = trainer.pokemonList[index];
    if (statsButton.classList.contains("stats-off")) {
        res = makePokemonDesc(pokemon);
        temp = res[res.length - 1];
        res = res.slice(0, res.length - 1);
    } else {
        res = makePokemonStats(pokemon);
    }
    for (i of res) {
        myPokemon.append(i)
    }
    if (temp != undefined) {
        myPokemonBottom.append(temp);
    }
    myPokemonBottom.append(makePokemonNav(index, trainer));
}

function changeMyPokemon(index, trainer) {
    myPokemon.innerHTML = "";
    myPokemonBottom.innerHTML = "";
    insertPokemonToMyPokemon(index, trainer);
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
    const pokemonNav = document.getElementsByClassName("pokemon-nav")[0].children;
    let index = -1;
    let j = 0
    for (i of pokemonNav) {
        if (i.classList.contains("active-pokemon")) {
            index = j;
            break;
        }
        j++;
    }
    changeMyPokemon(index, defaultTrainer)
})

function itemStock(trainer) {
    const itemsAmount = document.getElementsByClassName("items-amount");
    itemsAmount[0].innerText = trainer.bag.pokeballs.pokeball.amount;
    itemsAmount[1].innerText = trainer.bag.pokeballs.greatball.amount;
    itemsAmount[2].innerText = trainer.bag.pokeballs.ultraball.amount;
    itemsAmount[3].innerText = trainer.bag.pokeballs.masterball.amount;
}

itemStock(defaultTrainer);

function makeStoreItem(trainer, item) {
    const container = document.createElement("div");
    container.classList.add("store-outer-container", "card", "margin");

    const left = document.createElement("div");
    left.classList.add("store-left");

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.setAttribute("src", item.item.imgsrc);
    figure.append(img);

    const div = document.createElement("div");

    const itemNameP = document.createElement("p");
    const itemNameS = document.createElement("span");
    itemNameS.classList.add("store-item-name");
    itemNameS.innerText = item.item.name;
    itemNameP.append(itemNameS);

    const itemDescP = document.createElement("p");
    const itemDescS = document.createElement("span");
    itemDescS.classList.add("store-item-desc");
    itemDescS.innerText = item.item.desc;
    itemDescP.append(itemDescS);

    const itemOwnedP = document.createElement("p");
    const itemOwnedS = document.createElement("span");
    itemOwnedS.classList.add("store-item-owned");
    itemOwnedS.innerText = findItemByName(item.item.name,trainer).amount;
    itemOwnedP.append("Owned : ",itemOwnedS);

    div.append(itemNameP, itemDescP, itemOwnedP);

    left.append(figure,div);

    const right = document.createElement("div");
    right.classList.add("store-right");

    const itemPriceP = document.createElement("p");
    const itemPriceS = document.createElement("span");
    itemPriceS.classList.add("store-item-price");
    itemPriceS.innerText = currency(item.item.price);
    itemPriceP.append(itemPriceS)

    right.append(itemPriceP);

    container.append(left,right);
    return container;
}

const modalBuy = document.getElementById("modal-buy");

function makeModalDetails(item,trainer){
    const modalImg = document.getElementById("modal-img");
    const modalName =document.getElementById("modal-name");
    const modalOwned = document.getElementById("modal-owned");

    modalImg.setAttribute("src",item.item.imgsrc);
    modalName.innerText = item.item.name
    modalOwned.innerText = findItemByName(item.item.name,trainer).amount;
}

for(type of Object.entries(generateItem())){
    for(item of Object.entries(type[1])){
        if(item[1].item.price==0) continue;
        const itemStore = makeStoreItem(defaultTrainer,item[1])
        const temp = item[1]
        itemStore.addEventListener("click",function(){
            makeModalDetails(temp,defaultTrainer);
            modalBuy.classList.remove("hide");
        });
        store.append(itemStore);
    }
}

const modalSubmit = document.getElementById("modal-submit");
modalSubmit.addEventListener("click",function(){
    location.reload();
});

window.addEventListener("click",function(event){
    if(event.target==modalBuy){
        modalBuy.classList.add("hide");
    }
});

const moreItem = document.getElementById("more-item");
moreItem.addEventListener("click",function(){
    resetNavButton();
    switchOnNavButton(1);
});

const itemAdd = document.getElementsByClassName("item-add");
for(button of itemAdd){
    button.addEventListener("click",function(){
        resetNavButton();
        switchOnNavButton(1);
    });
}

window.addEventListener("resize",function(){
    
});