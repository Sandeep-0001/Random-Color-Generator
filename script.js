let btn=document.querySelector("button");
let box=document.querySelector("#colorBox");
btn.addEventListener("click",changecolor);

function changecolor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let rgbcolor=`RGB(${r},${g},${b}`;
    box.innerText=rgbcolor;
    box.style.color=rgbcolor;
    document.body.style.backgroundColor=rgbcolor;
}