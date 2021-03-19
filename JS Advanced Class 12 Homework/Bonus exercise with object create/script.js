let animal = {
    name: "Name of animal",
    age: "Age of animal",
    latinName: "Latin name of animal",
    numberOfLegs: "Number of legs of animal",
    print: function(){
        console.log(`Name: ${this.name};
Latin name: ${this.latinName};
Age: ${this.age};
Number of legs: ${this.numberOfLegs};`)
    }
}
console.log("Animal", animal);
// let kangaroo = Object.create(animal);
// kangaroo.name = "kangaroo";
// kangaroo.age = 16;
// kangaroo.latinName = "macropodidae";
// kangaroo.numberOfLegs = 5;
// console.log("Kangaroo", kangaroo);
// kangaroo.print();

// let giraffe = Object.create(animal);
// giraffe.name = "giraffe";
// giraffe.age = 3;
// giraffe.latinName = "giraffa";
// giraffe.numberOfLegs = 4;
// console.log("Giraffe", giraffe);
// giraffe.print();

let aquaticAnimal = Object.create(animal);
aquaticAnimal.type = "Type of water the animal lives in";
aquaticAnimal.livesInFreshWater = false;
aquaticAnimal.livesInSaltWater = false;
aquaticAnimal.changeLifeEnvironment = (environment) => {
    if(environment === "salt"){
         aquaticAnimal.livesInSaltWater = true;
         aquaticAnimal.livesInFreshWater = false;
         return;
    }
    else if(environment === "fresh"){
         aquaticAnimal.livesInSaltWater = false;
         aquaticAnimal.livesInFreshWater = true;
         return;
    }
    else {
        return console.error(`Please enter either "salt" or "fresh!`);
    }
}

console.log("Aquatic animal", aquaticAnimal);
// let shark = Object.create(aquaticAnimal);
// shark.name = "shark";
// shark.age = 2;
// shark.latinName = "selachimorpha";
// shark.numberOfLegs = 0;
// shark.type = "salt"
// shark.changeLifeEnvironment("fresh");
// console.log("Shark", shark);
// shark.print()

let flyingAnimal = Object.create(animal);
flyingAnimal.type = "Type of bird"
flyingAnimal.favoriteFood = "Favorite food of animal";
flyingAnimal.currentPlace = "Current place of animal";

// So podolunapisanoto, metodot sto go dodavam se dodava na objektot flying animal, i koga kje ja povikam ovaa funkcija za instanca kreirana so Object.create, ako vekje prethodno sum ja setirala vrednosta na currentPlace na novokreiranata instanca, ne ja menuva vo samata instanca, tuku vo nejzinoto proto, taka da ne znam so ovoj nacin na kreiranje objekti kako da go izbegnam toa.
flyingAnimal.flyOut = (place) => {
    if(place === undefined || place === null || place === ""){
        console.log("Please enter a valid place!");
    }
    else {
        flyingAnimal.currentPlace = place;
    }
}

console.log("Flying animal", flyingAnimal);
// let eagle = Object.create(flyingAnimal);
// eagle.name = "eagle";
// eagle.age = 4;
// eagle.latinName = "aquila";
// eagle.type = "bird of prey";
// eagle.favoriteFood = "fish";
// eagle.currentPlace = "Northern hemisphere";
// eagle.flyOut("Southern hemisphere");
// console.log(eagle.currentPlace);
// console.log("Eagle", eagle);
// eagle.print();

let terrestrialAnimal = Object.create(animal);
terrestrialAnimal.hasFur = false;
terrestrialAnimal.typeOfFur = "Type of fur of animal";
terrestrialAnimal.changeHasFur= () => {
    terrestrialAnimal.typeOfFur === "none" ? terrestrialAnimal.hasFur = false : terrestrialAnimal.hasFur = true;
}

// Isto i vo ovoj metod ne znam kako da go resam gorespomenatiot problem. Koga kje go povikam so instanca kreirana od terrestrialAnimal, namesto name sto sum i go dodelila na novokreiranata instanca, go cita name na samoto terrestrialAnimal. 
terrestrialAnimal.sound = (sound) => {
    console.log(`The ${terrestrialAnimal.name} ${sound}.`)
} 

console.log("Terrestrial animal", terrestrialAnimal);

// let wolf = Object.create(terrestrialAnimal);
// wolf.name = "wolf";
// wolf.age = 4;
// wolf.latinName = "lupus";
// wolf.typeOfFur = "2 layers";
// console.log("Wolf", wolf);
// console.log(wolf.hasFur);
// wolf.changeHasFur();
// console.log(wolf.hasFur);
// wolf.print();
// wolf.sound("howls"); 

let wildAnimal = Object.create(terrestrialAnimal);
wildAnimal.typeOfFood = "Foods that animal eats";
wildAnimal.favoriteFood = "Favorite food of animal"

console.log("Wild animal", wildAnimal);

// let fox = Object.create(wildAnimal);
// fox.name = "fox";
// fox.age = 3;
// fox.latinName = "vulpes";
// fox.typeOfFur = "2 layers";
// fox.typeOfFood = ['rabbit', "rodent", "bird", "frog", "berry"];
// fox.favoriteFood = "rabbit";

// console.log("Fox", fox);
// fox.print();
// fox.changeHasFur();
// fox.sound("squeals");

let domesticAnimal = Object.create(terrestrialAnimal);
domesticAnimal.Name = "Pet name of animal";
domesticAnimal.ownerName = "Name of owner of animal"
domesticAnimal.hasOwner = false;
domesticAnimal.price = "Price of animal"
domesticAnimal.getOwnerStatus = () =>{
    if(domesticAnimal.ownerName === undefined || domesticAnimal.ownerName === null || domesticAnimal.ownerName === ""){
        domesticAnimal.hasOwner = false;
    }
    else {
        domesticAnimal.hasOwner = true;
    }
}

ownerPrice = (object) => {
    if (!object.hasOwner) {
        console.log(`The animal costs ${object.price}$.`)
    }
    else {
        object.price += 1000;
        console.log(`The animal costs ${object.price}$.`);
    }
}

console.log("Domestic animal", domesticAnimal);

let Bessie = Object.create(domesticAnimal);
Bessie.name = "cow";
Bessie.latinName = "vitula eligans";
Bessie.numberOfLegs = 4;
Bessie.typeOfFur = "1 layer";
Bessie.Name = "Bessie";
Bessie.ownerName = "Jana"
Bessie.price = 2000;
Bessie.getOwnerStatus();

// console.log("Bessie the cow", Bessie);
// ownerPrice(Bessie);
// Bessie.print();
// Bessie.sound("moos"); // Istiot issue kako i vo pogornite 2 komentari. Nekako kako da zaklucuvam deka nasleduvanje koga kreirame objekti so Object.create e nepotrebno komplicirano, i deka klasite se najprakticni vo toj pogled. Sekako moze i jas pogresno gi vrzuvam metodite ili pravam nekoja druga greska, kje kazete vo fidbek :)
    

