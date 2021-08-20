 
const button = document.getElementById("btn");
const clr = document.querySelector(".color");
const hexh=document.querySelector(".hex");
button.addEventListener("click", function () {

    let backcolor = getcolor();

    document.body.style.backgroundColor = backcolor;
    clr.textContent = backcolor;
    hexh.style.backgroundColor=backcolor;

});

function getcolor() {
    let clor = Math.floor(10000000 * Math.random());
    let hexString = clor.toString(16);

    return "#" + hexString;
}

