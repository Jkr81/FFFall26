let allimages = document.querySelectorAll(".images");

let nextButton = document.getElementById("next");
let previousButton = document.getElementById("previous");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

let curentimage = 0;

allimages[curentimage].style.display = "block";

function nextImage() {
    allimages[curentimage].style.display = "none";

    curentimage = curentimage + 1;

    if (curentimage >= allimages.length) {
        curentimage = 0;
    }

    allimages[curentimage].style.display = "block";
}

function previousImage() {
    allimages[curentimage].style.display = "none";

    curentimage = curentimage - 1;

    if (curentimage < 0) {
        curentimage = allimages.length - 1;
    }

    allimages[curentimage].style.display = "block";
}

nextButton.addEventListener("click", nextImage);
previousButton.addEventListener("click", previousImage);

startButton.addEventListener("click", function() {
    
});

stopButton.addEventListener("click", function() {
    
});

