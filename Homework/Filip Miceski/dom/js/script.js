// 

// var height = 1.83;
// var limit = 1.63;

// if(height > limit) {
//     console.log("Mozes da se vozis na rolerkosterot.");
// } else {
//     console.log("Ne mozes da se vozis na rolerkosterot.");
// }

// var num1 = 5;
// var num2 = 7;

// if(num1 > num2) {
//     console.log(num1);
// } else if(num1 < num2) {
//     console.log(num2);
// } else {
//     console.log("Numbers are equal");
// }

// var today = "Sunday";

// switch(today) {
//     case "Monday":
//         console.log("Today is Monday");
//     break;
//     case "Tuesday":
//         console.log("Today is Tuesday");
//     break;
//     case "Wednesday":
//         console.log("Today is Wednesday");
//     break;
//     case "Thursday":
//         console.log("Today is Wednesday");
//     break;
//     case "Friday":
//         console.log("Today is Friday");
//     break;
//     case "Saturday":
//         console.log("Today is Saturday");
//     break;
//     case "Sunday":
//         console.log("Today is Sunday");
//     break;
//     default: console.log("Unknown day");
// }

// function SayHello() {
//     console.log("Hello World");
// }

// SayHello();

// function SayHelloAgain(name) {
//     return "Hello " + name;
// }

// console.log( SayHelloAgain("Mario") );

// function MarioPyramid(size) {
//     for(var i = 1; i <= size; i++) {
//         var result = "";

//         for(var j = 1; j <= i; j++) {
//             result += "#";
//         }

//         console.log(result);
//     }
// }

// MarioPyramid(15);


// console.dir(document.querySelector("h2"));
// document.querySelector("h2").innerHTML = "Hello World";

var button = document.querySelector(".date-button");
var result = document.querySelector(".date");

button.addEventListener("click", function() {
    result.innerHTML = new Date();
});

// За дома

// var movies = ["Pulp Fiction", "The Wild Bunch", "Star Wars", "Rear Window", "Mad Max"];
// Низата movies, со помош на Javascript (DOM) претворете ја во HTML во листи -> ul -> li.

// Бонус

// Ако успеете во листа, префрлете ја и во табела со тоа што, во thead ќе пишува име на филм (како наслов) а под него самото име на филмот.


//************************************************************************************************* */


function listOfMovies(){
    var listData = ['Fight Club', 'The Lord of the Rings', 'The Matrix', 'Interstellar', 'The Departed'];


var listContainer = document.createElement('div');

    document.getElementsByTagName('body')[0].appendChild(listContainer);

var listElement = document.createElement('ul');

    listContainer.appendChild(listElement);

var numberOfListItems = listData.length;
    for (var i = 0; i < numberOfListItems; ++i) {
        var listItem = document.createElement('li');
        
        listItem.innerHTML = listData[i];
        listElement.appendChild(listItem);
    }
}

listOfMovies()
    






    











