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
    constructor(name, imgsrc, price, type){
        this.name = name;
        this.imgsrc = imgsrc;
        this.price = price;
        this.type = type;
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

function defaultItems() {
    let itemList = new Object();

    itemList = {
        "pokeball" : new Item("Poke ball",
                            "assets/img/pokeball.png",
                            5000,
                            "pokeballs")
    }

    return itemList;
}

const defaultTrainer = new Trainer("Rezapu",
    "Reza Pahlevi Ubaidillah",
    "assets/img/trainer/profile.jpg",
    "Rookie Pokemon Trainer",
    "obed.ubaidillah@gmail.com",
    "Rp500.000,00",
    defaultPokemon(),
    defaultItems()
);