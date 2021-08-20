
const colors = ["Red", "Green", "Blue", "Yellow", "Pink", "Grey","White"];

const button = document.getElementById("btn");
const clr = document.querySelector(".color");
const basich=document.querySelector(".colorflipper");
button.addEventListener("click", function () {

    let backcolor = getcolor();

    document.body.style.backgroundColor = colors[backcolor];
    clr.textContent = colors[backcolor];
    basich.style.backgroundColor=colors[backcolor];
});

function getcolor() {
    let clor = Math.floor(7 * Math.random());

    return  clor;
}
