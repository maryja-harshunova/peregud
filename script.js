let smallHeading = document.querySelector("h2");

console.log(smallHeading);

function changeColor() {
    smallHeading.style.color = "#118DA8"
};

function changeColorOff() {
    smallHeading.style.color = "FFF"
};


smallHeading.addEventListener("mouseenter", changeColor);
smallHeading.addEventListener("mouseleave", changeColorOff);

let links = document.querySelector("a");
console.log(links);

for (let i = 0; i < 10; i++) {
    console.log("hello");
    
}
