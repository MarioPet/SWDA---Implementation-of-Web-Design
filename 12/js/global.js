// Simple Gallery

var imageList = document.querySelectorAll(".image-list li");
var popup = document.querySelector(".popup");
var image = document.querySelector(".image-container img");
var closePopup = document.querySelector(".close-popup");

for(var i = 0; i < imageList.length; i++) {
    imageList[i].addEventListener("click", function(event) {
        event.stopPropagation();
        popup.style.display = "flex";
        image.src = event.target.src;
    });   
}

closePopup.addEventListener("click", function() {
    popup.style.display = "none";
});

document.body.addEventListener("click", function() {
    popup.style.display = "none";
});

window.addEventListener("keydown", function(event) {
    if(event.keyCode == 27) {
        popup.style.display = "none";
    }
});



// Scroll To Element Smothy with Vanilla JavaScript
// let offset = 0;
// let call;
// function scroll() {
//     if ((offset - document.documentElement.scrollTop) > 0) {
//         document.documentElement.scrollTop += 10
//     }
//     else if ((offset - document.documentElement.scrollTop) < 0) {
//         document.documentElement.scrollTop -= 10
//     }
//     else {
//         clearInterval(call)
//     }
// };
// Add Event Listener to parent Element 
// document.querySelector('.navbar').addEventListener("click", reply_click);

//CallBack Function
// function reply_click(e) {
//     e.preventDefault();
//     call = setInterval(scroll, 10);
//     target = e.srcElement.dataset.scroll;
//     offset = document.getElementById(target).offsetTop
// }

window.addEventListener('resize', function() {
    console.log(document.documentElement.scrollTop);
});
