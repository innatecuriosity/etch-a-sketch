//functions

function changePixelColor(pixel) {
    pixel.style.cssText = "background-color:" + paint + ";";
    return NaN;
}

//----------------------------------MAIN--------------------------------------

//create squares
let rows = 16;
let cols = 16;
let paint = "black";
let holdToggle = true;
let paintList = ["black", "white", "purple", "blue", "green", "yellow", "orange", "red"];

const paintboard = document.querySelector(".paintboard");

    for (color of paintList) {
        const paintBucket = document.createElement("div");
        paintBucket.setAttribute("id", color);
        paintBucket.classList= "paintbucket";
        paintBucket.style.cssText = "background-color: "+color+";";

        paintBucket.addEventListener("click", function(event) {
            old = document.querySelector("#"+paint);
            old.style.borderWidth = "2px"
            paint = event.target.id;
            paintBucket.style.borderWidth  = "8px";
        })
        paintboard.appendChild(paintBucket);
    }

//const rowsCount = document.querySelector("");
//const colsCount = document.querySelector("");

const field = document.querySelector(".field");
field.style.cssText = "";
for (let i = 0; i<rows; i++){
    const row = document.createElement("div");
    row.classList = "row";
    row.style.cssText = "display:flex; flex:1 1 0"
    row.setAttribute("id","row"+i)

    // add 16 pixels per row
    for (let j=0; j<cols; j++){
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
