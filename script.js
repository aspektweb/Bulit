let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let painting = false;
let color = "black";

function startGame(){

document.querySelector(".startScreen").style.display="none";
document.getElementById("game").classList.remove("hidden");

}

function task(name){

document.getElementById("task").innerText =
"Draw: " + name;

}

function setColor(c){

color = c;

}

canvas.addEventListener("mousedown",()=>painting=true);
canvas.addEventListener("mouseup",()=>{

painting=false;
ctx.beginPath();

});

canvas.addEventListener("mousemove",draw);

function draw(e){

if(!painting) return;

ctx.lineWidth = 6;
ctx.lineCap = "round";
ctx.strokeStyle = color;

ctx.lineTo(e.offsetX,e.offsetY);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(e.offsetX,e.offsetY);

}

function clearCanvas(){

ctx.clearRect(0,0,canvas.width,canvas.height);

}

function saveImage(){

let link = document.createElement("a");

link.download="drawing.png";
link.href=canvas.toDataURL();
link.click();

alert("Teacher can now check the drawing!");

}