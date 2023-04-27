class Person {
    constructor (name, gender){
    this.name = name;
    this.gender = gender;
    }
};

class Flat {
    residents = new Array();
    addResident(resident) {
        this.residents.push(resident);
        console.log(`Новий житель: ${resident.name} -- ${resident.gender}`);
    }
}

class House {
    flats = new Array();
    constructor (maxFlats) {
    this.maxFlats = maxFlats;
    }
    addFlat(flat) {
        if (this.flats.length < this.maxFlats) {
            this.flats.push(flat);
            console.log(`Додана нова квартира! Загальна к-сть квартир складає: ${this.flats.length}`);
        } else {
            console.log(`Вибачте, квартир більше нема! Максимальна к-сть квартир складає: ${this.maxFlats}`);
        }
    }
}

let person1 = new Person ('Михайло', 'чоловік');
let person2 = new Person ('Наталія', 'жінка');
let person3 = new Person ('Дмитро', 'чоловік');
let person4 = new Person ('Марина', 'жінка');
let person5 = new Person ('Юрій', 'чоловік');

let flat1 = new Flat ();
let flat2 = new Flat ();
let flat3 = new Flat ();
let flat4 = new Flat ();


flat1.addResident(person1);
flat2.addResident(person2);
flat2.addResident(person3);
flat3.addResident(person4);
flat4.addResident(person5);


let house = new House (3);

house.addFlat(flat1);
house.addFlat(flat2);
house.addFlat(flat3);
house.addFlat(flat4);