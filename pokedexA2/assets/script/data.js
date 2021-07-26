class Trainer {
    constructor(username, trainerName, imgProfile, rank, email, balance, pokemonList, bag) {
        this.username = username;
        this.trainerName = trainerName;
        this.imgProfile = imgProfile;
        this.rank = rank;
        this.email = email;
        this.balance = balance;
        this.pokemonList = pokemonList;
        this.bag = bag;
    }
}

class Pokemon {
    constructor(pokemonName, imgsrc, desc, types, stats) {
        this.pokemonName = pokemonName;
        this.imgsrc = imgsrc;
        this.desc = desc;
        this.types = types;
        this.stats = stats;
    }
}

class Item {
    constructor(name, imgsrc, price, desc) {
        this.name = name;
        this.imgsrc = imgsrc;
        this.price = price;
        this.desc = desc;
    }
}

function defaultPokemon() {
    let pokemonList = []
    const charmander = new Pokemon("Charmander",
        "assets/img/pokemons/charmander.png",
        "Charmander is a bipedal, reptilian Pokemon with a primarily orange body and blue eyes.",
        ["Fire"],
        [39, 52, 43, 60, 50, 65]);
    const bulbasaur = new Pokemon("Bulbasaur",
        "assets/img/pokemons/bulbasaur.png",
        "There is a plant seed on its back right from the day this Pokemon is born. The seed slowly grows larger.",
        ["Grass", "Poison"],
        [45, 49, 49, 65, 65, 45]);
    const squirtle = new Pokemon("Squirtle",
        "assets/img/pokemons/squirtle.png",
        "Squirtle is a small Pokemon that resembles a light-blue turtle.  It has large, purplish or reddish eyes.",
        ["Water"],
        [44, 48, 65, 50, 64, 43]);
    pokemonList.push(charmander, bulbasaur, squirtle);
    return pokemonList
}

function generateItem() {
    let itemList = new Object();

    itemList = {
        pokeballs: {
            pokeball: {
                item: new Item("Poke ball",
                    "assets/img/items/pokeball.png",
                    5000,
                    "Used to Catch Wild Pokemon"),
                amount: 0
            },
            greatball: {
                item: new Item("Great ball",
                    "assets/img/items/greatball.png",
                    10000,
                    "Used to Catch Wild Pokemon with a Greater Chance of Success."),
                amount: 0
            },
            ultraball: {
                item: new Item("Ultra ball",
                    "assets/img/items/ultraball.png",
                    50000,
                    "Used to Catch Wild Pokemon with the Highest Chance of Success."),
                amount: 0
            },
            masterball: {
                item: new Item("Master ball",
                    "assets/img/items/masterball.png",
                    0,
                    "Used to Catch Wild Pokemon with 100% Chance of Success."),
                amount: 0
            }
        },
        potions: {
            potion: {
                item: new Item("Potion",
                    "assets/img/items/potion.png",
                    7500,
                    "Heals Pokemon For 20 HP"),
                amount: 0
            },
            superpotion: {
                item: new Item("Super Potion",
                    "assets/img/items/superpotion.png",
                    15000,
                    "Heals Pokemon For 50 HP"),
                amount: 0
            },
            hyperpotion: {
                item: new Item("Hyper Potion",
                    "assets/img/items/hyperpotion.png",
                    22500,
                    "Heals Pokemon For 200 HP"),
                amount: 0
            },
            maxpotion: {
                item: new Item("Max Potion",
                    "assets/img/items/maxpotion.png",
                    50000,
                    "Heals Pokemon For Full HP"),
                amount: 0
            }
        },
        revives: {
            revive: {
                item: new Item("Revive",
                    "assets/img/items/revive.png",
                    30000,
                    "Revives Pokemon with Half HP"),
                amount: 0
            },
            maxrevive: {
                item: new Item("Max Revive",
                    "assets/img/items/maxrevive.png",
                    70000,
                    "Revives Pokemon with Full HP"),
                amount: 0
            }
        }
    }
    return itemList;
}

function defaultItems() {
    let itemList = generateItem();

    itemList.pokeballs.pokeball.amount = 10;
    itemList.pokeballs.greatball.amount = 5;
    itemList.pokeballs.ultraball.amount = 7;
    itemList.pokeballs.masterball.amount = 1;
    itemList.potions.potion.amount = 4;

    return itemList;
}

const defaultTrainer = new Trainer("Rezapu",
    "Reza Pahlevi Ubaidillah",
    "assets/img/trainer/profile.jpg",
    "Rookie Pokemon Trainer",
    "obed.ubaidillah@gmail.com",
    500000,
    defaultPokemon(),
    defaultItems()
);

function findItemByName(name,trainer){
    const bag = trainer.bag;
    for(type of Object.entries(bag)){
        for(item of Object.entries(type[1])){
            if(item[1].item.name==name) return item[1];
        }
    }
}