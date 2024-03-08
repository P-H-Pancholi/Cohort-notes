class Animal {
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    speak() {
        console.log("Hi there, " + this.speaks);
    }
}

let dog = new Animal("Dog", 2, "Bhow Bhow!");
let cat = new Animal("Cat", 2, "meow");

cat.speak();