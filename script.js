// Object literal used to store the properties of a fictional dog.
var myDog = {
    name: "Scooby-Doo",
    breed: "Great Dane",
    tvProgram: "Scooby-Doo Where Are You",
    notes: "Lifelong companion of Shaggy Rogers; about a big dog and several teenage humans. (See Scooby-Doo.)",
    mySound: "I'll do anything for a Scooby Snack!"
};

// Display information about the fictional dog from the object literal.
document.write("Hello, my name is " + myDog.name + "! ");
document.write(myDog.mySound);
document.write(" I starred in the TV show " + myDog.tvProgram + ".");
document.write(" My character was a " + myDog.breed + ". ");
document.write(myDog.notes + "<br><br>");

// Simple Constructor for creating dog objects.
function Dog(name, breed, tvProgram, notes, mySound, canTalk) {
    // Properties of the dog object.
    this.name = name;
    this.breed = breed;
    this.tvProgram = tvProgram;
    this.notes = notes;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Method to display a greeting message about the dog.
    this.myGreeting = function () {
        document.write("Hello, my name is " + this.name + "! ");
        document.write(this.mySound);
        document.write(" I starred in the TV show " + this.tvProgram + ".");
        document.write(" My character was a " + this.breed + ". ");
        document.write(this.notes + "<br><br>");
    }
}

// Creating a dog object using the Dog constructor.
const myDogConst = new Dog(
    myDog.name,
    myDog.breed,
    myDog.tvProgram,
    myDog.notes,
    myDog.mySound,
    true
);

// Call the object's myGreeting method to display a greeting message.
myDogConst.myGreeting();
