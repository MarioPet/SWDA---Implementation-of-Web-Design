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