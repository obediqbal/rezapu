class Trainer {
    constructor(username, trainerName, imgProfile, rank, email, balance, pokemonList){
        this.username = username;
        this.trainerName = trainerName;
        this.imgProfile = imgProfile;
        this.rank = rank;
        this.email = email;
        this.balance = balance;
        this.pokemonList = pokemonList;
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

function defaultPokemon() {
    let pokemonList = []
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
    return pokemonList
}

const defaultTrainer = new Trainer("Rezapu",
                                    "Reza Pahlevi Ubaidillah",
                                    "assets/img/profile.jpg",
                                    "Rookie Pokemon Trainer",
                                    "obed.ubaidillah@gmail.com",
                                    "Rp500.000,00",
                                    defaultPokemon());