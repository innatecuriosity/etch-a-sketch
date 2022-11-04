//functions

function changePixelColor(pixel) {
    pixel.style.cssText = "background-color:" + paint + ";";
    return NaN;
}

//----------------------------------MAIN--------------------------------------

//create squares
let size = 100;
let paint = "black"

const field = document.querySelector(".field");
field.style.cssText = "";
for (let i = 0; i<size; i++){
    const row = document.createElement("div");
    row.classList = "row";
    row.style.cssText = "display:flex; flex:1 1 0"
    row.setAttribute("id","row"+i)

    // add 16 pixels per row
    for (let j=0; j<size; j++){
        const pixel = document.createElement("div");
        pixel.setAttribute("id", "r"+i+"c"+j);
        pixel.classList= "pixel";
        row.appendChild(pixel);
        pixel.cssText = "grid-row-start:"+i+"; grid-column-start:"+j+";"
        // add event listener
        pixel.addEventListener("mouseover", function(event) {changePixelColor(event.target)})    
        
    }

    field.appendChild(row);
}
