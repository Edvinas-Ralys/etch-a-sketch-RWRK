const gridSizeOption = document.querySelector(`.gridSizeOption`);
const sketch = document.querySelector(`.sketch`);
const colorOption = document.querySelector(`.colorBox`);

const red = document.createElement(`div`)
red.classList.add(`red`);
colorOption.appendChild(red);
const green = document.createElement(`div`);
green.classList.add(`green`);
colorOption.appendChild(green);
const blue = document.createElement(`div`);
blue.classList.add(`blue`);
colorOption.appendChild(blue);

for(let i = 1; i < 10; i++){
const gridSizeBox = document.createElement(`div`);
gridSizeBox.classList.add(`size`);
gridSizeBox.innerHTML = `${i}0x${i}0`;
gridSizeBox.addEventListener(`click`,  function (){drawGrid(i)});
gridSizeOption.appendChild(gridSizeBox);
};

for(let u = 1; u < 10; u++){
    const colorBox = document.createElement(`div`);
    colorBox.classList.add(`color`);
    if(u < 4){
        colorBox.style.cssText = `background: rgb(${u*85},0,0);`;
    }
    else if(3 < u && u < 7){
        colorBox.style.cssText = `background: rgb(0,${(u-3)*85},0);`;
    }
    else if (u > 6 && u < 10) {
        colorBox.style.cssText = `background: rgb(0,0,${(u-6)*85});`;
    }
    colorOption.appendChild(colorBox)
    colorBox.addEventListener(`click`, function(){colorSelect(u)})
}

function drawGrid(tileCount){
if(sketch.childNodes.length != 0){
    while(sketch.firstChild){
        sketch.removeChild(sketch.firstChild);
    }
}
let j = 0;
while(j < tileCount*10){
    column = document.createElement(`div`);
    column.classList.add(`column`);
    sketch.appendChild(column);
    j++;
    let k = 0;
    while(k < tileCount*10){
        square = document.createElement(`div`);
        square.classList.add(`square`);
        column.appendChild(square);
    k++
}}};


function colorSelect(u){
    let tiles = document.querySelectorAll(`.square`);
    if(u < 4){
        for(const tile of tiles){
            tile.addEventListener(`mouseover`, function(){
                tile.style.cssText = `background: rgb(${u*85},0,0);`;})
            }
    }
    else if(3 < u && u < 7){
        console.log(u)
        for(const tile of tiles){
            tile.addEventListener(`mouseover`, function(){
                tile.style.cssText = `background: rgb(0,${(u-3)*85},0);`;})
            }
    }
    else if(u > 6) {
        for(const tile of tiles){
            tile.addEventListener(`mouseover`, function(){
                tile.style.cssText = `background: rgb(0,0,${(u-6)*85});`;})
            }
            
    }};

