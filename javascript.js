const gridSizeOption = document.querySelector(`.gridSizeOption`);

for(let i = 1; i < 10; i++){
const gridSizeBox = document.createElement(`div`);
gridSizeBox.classList.add(`size${i}`);
gridSizeBox.innerHTML = `${i}0x${i}0`;
gridSizeBox.addEventListener(`click`,  function (){drawGrid(i)});
gridSizeOption.appendChild(gridSizeBox);
};



function drawGrid(tileCount){
    
    console.log(tileCount)
}
