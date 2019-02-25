// The range thingy

// var range = document.querySelector("#range");
// var rectangle = document.querySelector(".scaled-item");

// range.addEventListener("change", function() {
//     rectangle.style.width = this.value + "px";
//     rectangle.style.height = this.value + "px";
// });

////////////////////////////////////////////////////////////////////////////

// BMI

// var wght = document.querySelector("#wght");
// var hght = document.querySelector("#hght");
// var button = document.querySelector("#calc");
// var result = document.querySelector("#result");

// button.addEventListener("click", function() {
//     result.innerHTML = "Your Body Mass Index is: " + parseInt(wght.value) / (parseInt(hght.value) * parseInt(hght.value));
// });

////////////////////////////////////////////////////////////////////////////

// CURRENCY CONVERTER

var amount = document.querySelector("#amount");
var currency = document.querySelector("#curency");
var button = document.querySelector("#convert");
var result = document.querySelector("#result");

button.addEventListener("click", function(){
    switch(currency.value) {
        case "eur": 
            result.innerHTML = "Conversion in MKD: " + (parseInt(amount.value) * 61.5);
        break;
        case "usd": 
            result.innerHTML = "Conversion in MKD: " + (parseInt(amount.value) * 44.5);
        break;
    }
});

function countBs(str) {
    var count = 0;

    for(var i = 0; i < str.length; i++) {
        if (str[i] == "B") {
            count++;
        }
    }

    console.log(count);
}

countBs("ASDKLQJWELQKJWEBASDBADSBBDA");