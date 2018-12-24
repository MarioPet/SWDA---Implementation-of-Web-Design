// Intro to JS

// console.log("test" + "test");
// console.log(5 + 5);

// var name = "Mario";
// console.log(name);


// alert(name);

// function helloWorld() {
//     return "Hello World";
// }

// console.log(  helloWorld()  );

// function otherHelloWorld() {
//     console.log("Hello World");
// }

// otherHelloWorld();

// function helloName(name) {
//     console.log("Hello " + name);
// }

// helloName("Mario");

// function dogYears(age){
//     return "My dog is " + age + " and that makes him " + (age * 7) + " years old in his human form.";
// }

// console.log(dogYears(10));

// The Fortune Teller

// function fortuneTeller(name, ocupation, city, age) {
//     return "Hello Stranger. Your name is " + name + ", you come from " + city + ", you work as a " + ocupation + " and you're " + age + " old.";
// }

// console.log(fortuneTeller("Mario", "Front-end Developer", "Skopje", 25));

// The Roller-coaster situation

// function rollerCoasterRider(height, limit) {
//     if(height >= limit) {
//         return "You CAN ride the roller-coaster.";
//     } else {
//         return "You CAN'T ride the roller-coaster.";
//     }
// }

// console.log( rollerCoasterRider(1.83, 1.68) );

// Numbering around

function numberComparison(a, b) {
    if(a > b) {
        return "Number " + a + " is greater than " + b;
    } else if(a < b) {
        return "Number " + b + " is greater than " + a;
    } else {
        return "Numbers are equal.";
    }
}

console.log( numberComparison(25, 10) );