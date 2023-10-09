const gridSizeOption = document.querySelector(`.gridSizeOption`);
const sketch = document.querySelector(`.sketch`);
const colorOption = document.querySelector(`.color`);

for(let i = 1; i < 10; i++){
const gridSizeBox = document.createElement(`div`);
gridSizeBox.classList.add(`size${i}`);
gridSizeBox.innerHTML = `${i}0x${i}0`;
gridSizeBox.addEventListener(`click`,  function (){drawGrid(i)});
gridSizeOption.appendChild(gridSizeBox);
};

for(let u = 0; u < 10; u++){
    const colorBox = document.createElement(`div`);
    colorBox.classList.add(`color${u}`);
    colorBox.innerHTML = `color ${u}`;
    colorBox.addEventListener(`click`, function(){colorSelect(u)})
    colorOption.appendChild(colorBox);
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
}
}
};
function colorSelect(u){
    console.log(u)
    let tiles = document.querySelectorAll(`.square`);
    if(u === 0){
        for(const tile of tiles){
            tile.addEventListener(`mouseover`, function(){
                tile.style.cssText = `background: black;`;})
            }
    }
    else{
        for(const tile of tiles){
            tile.addEventListener(`mouseover`, function(){
                tile.style.cssText = `background: red;`;})
            } 
    }
    };

