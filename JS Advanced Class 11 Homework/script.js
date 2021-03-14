// Homework Inheritance
// Animal Kingdom


function Animal(name, age, latinName, numberOfLegs){

    this.name = name;
    this.age = age;
    this.latinName = latinName;
    this.numberOfLegs = numberOfLegs;

    this.print = function(){
        console.log(`Name: ${this.name};
Latin name: ${this.latinName};
Age: ${this.age};
Number of legs: ${this.numberOfLegs};`)
    }
}

let kangaroo = new Animal("kangaroo", 16, "macropodidae", 5); 
console.log("Kangaroo", kangaroo);
kangaroo.print();

let chicken = new Animal("chicken", 0.5, "gallus gallus domesticus", 2);
console.log("Chicken", chicken);
chicken.print();

let llama = new Animal("llama", 3, "lama glama", 4);
console.log("Llama", llama);
llama.print();


function AquaticAnimal(name, age, latinName, numberOfLegs, type){

    Object.setPrototypeOf(this, new Animal(name, age, latinName, numberOfLegs));
    this.type = type;
    this.livesInSaltWater = false;
    this.livesInFreshWater = false;

    this.changeLifeEnvironment = function(){
        return this.type === "salt" ? this.livesInSaltWater = true : this.type === "fresh" ? this.livesInFreshWater = true : `Please enter either "salt" or "fresh" to set the living environment of the aquatic animal!`;
    }
}

let shark = new AquaticAnimal("shark", 1, "selachimorpha", 0, "salt");
console.log("Shark", shark);
shark.print();
shark.changeLifeEnvironment();

let whale = new AquaticAnimal("whale", 2, "cetus", 0, "salt");
console.log("Whale", whale);
whale.print();
whale.changeLifeEnvironment();

let octopus = new AquaticAnimal("octopus", 0.3, "octopoda", 8, "salt");
console.log("Octopus", octopus);
octopus.print();
octopus.changeLifeEnvironment();

let alligator = new AquaticAnimal("alligator", 6, "alligator", 4, "fresh");
console.log("Alligator", alligator);
alligator.print();
alligator.changeLifeEnvironment();


function FlyingAnimal(name, age, latinName, numberOfLegs, type, favoriteFood, currentPlace){

    Object.setPrototypeOf(this, new Animal(name, age, latinName, numberOfLegs));
    this.type = type;
    this.favoriteFood = favoriteFood;
    this.currentPlace = currentPlace;

    this.flyOut = function(place){
        this.currentPlace = place;
    }
}

let eagle = new FlyingAnimal("eagle", 4, "aquila", 2, "bird of prey",  "fish", "Northern hemisphere");
console.log("Eagle", eagle);
eagle.print();
eagle.flyOut("Southern hemisphere");

let falcon = new FlyingAnimal("falcon", 1, "falco", 2, "bird of prey", "birds", "Northern hemisphere");
console.log("Falcon", falcon);
falcon.print();
falcon.flyOut("Southern hemisphere");

let albatross = new FlyingAnimal("albatross", 2, "diomedeidae", 2, "seabird", "squids", "Southern hemisphere");
console.log("Albatross", albatross);
albatross.print();


function TerrestrialAnimal(name, age, latinName, numberOfLegs, typeOfFur, sound){

    Object.setPrototypeOf(this, new Animal(name, age, latinName, numberOfLegs));
    this.hasFur = false;
    this.typeOfFur = typeOfFur;

    this.changeHasFur = function(){
        return typeOfFur !== "none" ? this.hasFur = true : this.hasFur = false;
    }

    this.sound = function(){
        console.log(`The ${this.name} ${sound}.`)
    }
}

let wolf = new TerrestrialAnimal("wolf", 5, "lupus", 4, "2 layers", "howls");
console.log("Wolf", wolf);
wolf.print();
wolf.changeHasFur();
wolf.sound();

let pig = new TerrestrialAnimal("pig", 2, "sus", 4, "1 layer", "oinks");
console.log("Pig", pig);
pig.print();
pig.changeHasFur();
pig.sound();

let chimpanzee = new TerrestrialAnimal("chimpanzee", 1, "pan troglodytes", 2, "hair", "screams");
console.log("Chimp", chimpanzee);
chimpanzee.print();
chimpanzee.changeHasFur();
chimpanzee.sound();


function WildAnimal(name, age, latinName, numberOfLegs, typeOfFur, sound, typeOfFood, favoriteFood){

    Object.setPrototypeOf(this, new TerrestrialAnimal(name, age, latinName, numberOfLegs, typeOfFur, sound));
    this.typeOfFood = typeOfFood;
    this.favoriteFood = favoriteFood;
} 

let fox = new WildAnimal("fox", 3, "vulpes", 4, "2 layers", "squeals", ['rabbit', "rodent", "bird", "frog", "berry"], "rabbit");
console.log("Fox", fox);
fox.print();
fox.changeHasFur();
fox.sound();

let bear = new WildAnimal("bear", 4, "ursus", 4, "2 layers", "roars", ["grass", "berry", "fish", "root", "insect"], "fish");
console.log("Bear", bear);
bear.print();
bear.changeHasFur();
bear.sound();

let bobcat = new WildAnimal("bobcat", 4, "lynx rufus", 4, "1 layer", "roars", ["rabbit", "mouse", "bird"], "rabbit");
console.log("Bobcat", bobcat);
bobcat.print();
bobcat.changeHasFur();
bobcat.sound();


function DomesticAnimal(name, age, latinName, numberOfLegs, typeOfFur, sound, Name, ownerName){

    Object.setPrototypeOf(this, new TerrestrialAnimal(name, age, latinName, numberOfLegs, typeOfFur, sound));
    this.Name = Name;
    this.ownerName = ownerName;
}

let Bessie = new DomesticAnimal("cow", 1, "vitula eligans", 4, "1 layer", "moos", "Bessie", "Jana");
console.log("Bessie the cow", Bessie);
Bessie.print();
Bessie.changeHasFur();
Bessie.sound();

let Milo = new DomesticAnimal("sphynx cat", 6, "felis catus", 4, "none", "meows", "Milo", "Anastas");
console.log("Milo the cat", Milo);
Milo.print();
Milo.changeHasFur();
Milo.sound();

let Toto = new DomesticAnimal("iguana", 3, "iguana iguana", 4, "none", "snorts", "Toto", "Ana");
console.log("Toto the iguana", Toto);
Toto.print();
Toto.changeHasFur();
Toto.sound();






