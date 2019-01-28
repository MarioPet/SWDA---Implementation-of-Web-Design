// For

// for(var i = 0; i <= 10; i++) {
//     console.log(i);
// }


function Mountain() {

    var result = "";

    var Flat = function(size) {
        for(i = 0; i < size; i++) {
            result += "_";
        }
    }

    var Peak = function(size) {
        result += "/";
        for(var i = 0; i < size; i++) {
            result += "'";
        }
        result += "\\";
    }

    Flat(5);
    Peak(4);
    Flat(15);
    Peak(7);
    Flat(2);
    Peak(7);
    Flat(9);
    Peak(3);
    Flat(5);
    Peak(10);
    Flat(5);

    // console.log(result);
    return result;
}

// Mountain();
console.log(  Mountain()  );

var colors = ["red", "green", "blue"];

for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


// HOMEWORK

for (var i = 0, result = ''; i < 5; i++) {
    result += '|__|';
    for (var b = 0; b < 2; b++) {
        result += '  ';
    }
    console.log(result);
}




