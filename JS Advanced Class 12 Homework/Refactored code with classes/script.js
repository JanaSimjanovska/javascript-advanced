// Homework Class 12
// Animal Kingdom refactoring with classes 

// Extra requirements 
// make get/set for liveInSaltWater in AquaticAnimal, typeOfFur in TerrestrialAnimal and typeOfFood in WildAnimal
// add new properties in DomesticAnimal...The first one is hasOwner boolean value and price. In addition add static ownerPrice method that in case any animal has owner should add additional 1000 to it's price value

class Animal{

    constructor(name, age, latinName, numberOfLegs){
        this.name = name;
        this.age = age;
        this.latinName = latinName;
        this.numberOfLegs = numberOfLegs;
    }

    print = function(){
        console.log(`Name: ${this.name};
Latin name: ${this.latinName};
Age: ${this.age};
Number of legs: ${this.numberOfLegs};`)
    }
}
    
// let kangaroo = new Animal("kangaroo", 16, "macropodidae", 5); 
// console.log("Kangaroo", kangaroo);
// kangaroo.print();

// let chicken = new Animal("chicken", 0.5, "gallus gallus domesticus", 2);
// console.log("Chicken", chicken);
// chicken.print();

// let llama = new Animal("llama", 3, "lama glama", 4);
// console.log("Llama", llama);
// llama.print();


class AquaticAnimal extends Animal{
    constructor(name, age, latinName, numberOfLegs, type){
        super(name, age, latinName, numberOfLegs)
        this.type = type;
        this.livesInSaltWater = false;
        this.livesInFreshWater = false;
    }
    
    set livesInSaltWater(environment){
        if(environment !== "salt"){
            console.log(`This animal doesn't live in salt water`);
            this._livesInSaltWater = false;
        }
        else{
            this._livesInSaltWater = true;
        } 
    }

    get livesInSaltWater(){
        console.log("Lives in salt water:", this._livesInSaltWater);
        return this._livesInSaltWater;
    }

    changeLifeEnvironment = (environment) => {
        if(environment === "salt"){
             this.livesInSaltWater = true;
             this.livesInFreshWater = false;
             return;
        }
        else if(environment === "fresh"){
             this.livesInSaltWater = false;
             this.livesInFreshWater = true;
             return;
        }
        else {
            return console.error(`Please enter either "salt" or "fresh!`);
        }
    }
}

// let shark = new AquaticAnimal("shark", 1, "selachimorpha", 0, "salt");
// shark.livesInSaltWater = "salt";
// shark.livesInSaltWater;
// shark.livesInSaltWater = "";
// shark.livesInSaltWater;
// console.log("Shark", shark);
// shark.print();

// let whale = new AquaticAnimal("whale", 2, "cetus", 0, "salt");
// console.log("Whale", whale);
// whale.print();
// whale.changeLifeEnvironment();

// let octopus = new AquaticAnimal("octopus", 0.3, "octopoda", 8, "salt");
// console.log("Octopus", octopus);
// octopus.print();
// octopus.changeLifeEnvironment();

// let alligator = new AquaticAnimal("alligator", 6, "alligator", 4, "fresh");
// console.log("Alligator", alligator);
// alligator.print();
// alligator.changeLifeEnvironment();


class FlyingAnimal extends Animal{
    constructor(name, age, latinName, numberOfLegs, type, favoriteFood, currentPlace){
        super(name, age, latinName, numberOfLegs)
        this.type = type;
        this.favoriteFood = favoriteFood;
        this.currentPlace = currentPlace;
    }
    
    flyOut = (place) => {
        if(place === undefined || place === null || place === ""){
            console.log("Please enter a valid place!");
        }
        else {
            this.currentPlace = place;
        }
    }
}

// let eagle = new FlyingAnimal("eagle", 4, "aquila", 2, "bird of prey",  "fish", "Northern hemisphere");
// console.log("Eagle", eagle);
// eagle.print();
// eagle.flyOut("Southern hemisphere");

// let falcon = new FlyingAnimal("falcon", 1, "falco", 2, "bird of prey", "birds", "Northern hemisphere");
// console.log("Falcon", falcon);
// falcon.print();
// falcon.flyOut("");

// let albatross = new FlyingAnimal("albatross", 2, "diomedeidae", 2, "seabird", "squids", "Southern hemisphere");
// console.log("Albatross", albatross);
// albatross.print();


class TerrestrialAnimal extends Animal{
    constructor(name, age, latinName, numberOfLegs, typeOfFur){
        super(name, age, latinName, numberOfLegs)
        this.hasFur = false;
        this.typeOfFur = typeOfFur;
    } 
    
    set typeOfFur(typeOfFur){
        if(typeOfFur === undefined || typeOfFur === null || typeOfFur === ""){
            console.log(`Please enter either "1 layer", "2 layers", "hair" or "none"!`)
        }
        else {
            this._typeOfFur = typeOfFur
        }
    }

    get typeOfFur(){
        console.log("Type of fur of the animal:", this._typeOfFur);
        return this._typeOfFur;
    }

    changeHasFur = () => {
        this._typeOfFur === "none" ? this.hasFur = false : this.hasFur = true;
    }

    sound = (sound) => {
        console.log(`The ${this.name} ${sound}.`)
    }
}

// let wolf = new TerrestrialAnimal("wolf", 5, "lupus", 4, "2 layers");
// wolf.typeOfFur;
// console.log("Wolf", wolf);
// console.log(wolf.hasFur);
// wolf.changeHasFur();
// console.log(wolf.hasFur);
// wolf.print();
// wolf.sound("howls");

// let pig = new TerrestrialAnimal("pig", 2, "sus", 4, "1 layer");
// console.log("Pig", pig);
// pig.print();
// pig.changeHasFur();
// pig.sound("oinks");

// let chimpanzee = new TerrestrialAnimal("chimpanzee", 1, "pan troglodytes", 2, "hair");
// console.log("Chimp", chimpanzee);
// chimpanzee.print();
// chimpanzee.changeHasFur();
// chimpanzee.sound("screams");


class WildAnimal extends TerrestrialAnimal{
    constructor(name, age, latinName, numberOfLegs, typeOfFur, typeOfFood, favoriteFood){
        super(name, age, latinName, numberOfLegs, typeOfFur)
        this.typeOfFood = typeOfFood;
        this.favoriteFood = favoriteFood;
    }

    set typeOfFood(typeOfFood){
        if((Array.isArray(typeOfFood) && !typeOfFood.length) || typeOfFood === undefined || typeOfFood === null){
            console.log(`Please enter valid types of food!`)
        }
        else {
            this._typeOfFood = typeOfFood;
        }
    }
    
    get typeOfFood(){
        console.log(`This animal typically eats: ${this._typeOfFood.join(", ")}`);
        return this._typeOfFood;
    }
}

// let fox = new WildAnimal("fox", 3, "vulpes", 4, "2 layers", ['rabbit', "rodent", "bird", "frog", "berry"], "rabbit");
// console.log("Fox", fox);
// fox.print();
// fox.changeHasFur();
// fox.sound("squeals");

// let bear = new WildAnimal("bear", 4, "ursus", 4, "2 layers",  ["grass", "berry", "fish", "root", "insect"], "fish");
// console.log("Bear", bear);
// bear.print();
// bear.changeHasFur();
// bear.sound("roars");

// let bobcat = new WildAnimal("bobcat", 4, "lynx rufus", 4, "1 layer", ["rabbit", "mouse", "bird"], "rabbit");
// console.log("Bobcat", bobcat);
// bobcat.print();
// bobcat.changeHasFur();
// bobcat.sound("roars");


class DomesticAnimal extends TerrestrialAnimal{
    constructor(name, age, latinName, numberOfLegs, typeOfFur, Name, ownerName, price){
        super(name, age, latinName, numberOfLegs, typeOfFur)
        this.Name = Name;
        this.ownerName = ownerName;
        this.hasOwner = false;
        this.price = price;
    }

    getOwnerStatus = () =>{
        if(this.ownerName === undefined || this.ownerName === null || this.ownerName === ""){
            this.hasOwner = false;
        }
        else {
            this.hasOwner = true;
        }
    }

    static ownerPrice = (object) => {
        if (!object.hasOwner) {
            console.log(`The animal costs ${object.price}$.`)
        }
        else {
            object.price += 1000;
            console.log(`The animal costs ${object.price}$.`);
        }
    }
}

// let Bessie = new DomesticAnimal("cow", 1, "vitula eligans", 4, "1 layer", "Bessie", "Jana", 2000);
// console.log("Bessie the cow", Bessie);
// Bessie.print();
// Bessie.getOwnerStatus();
// DomesticAnimal.ownerPrice(Bessie);
// Bessie.sound("moos");

// let Milo = new DomesticAnimal("sphynx cat", 6, "felis catus", 4, "none", "Milo", "Anastas", 500);
// console.log("Milo the cat", Milo);
// Milo.print();
// Milo.changeHasFur();
// Milo.sound("meows");

// let Toto = new DomesticAnimal("iguana", 3, "iguana iguana", 4, "none", "Toto", "Ana", 4000);
// console.log("Toto the iguana", Toto);
// Toto.print();
// Toto.changeHasFur();
// Toto.sound("snorts");






