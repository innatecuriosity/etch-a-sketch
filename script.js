//functions

function changePixelColor(pixel) {
    if (mouseKey || holdTog) pixel.style.cssText = "background-color:" + paint + ";";
    return NaN;
}

function updateSettings() {
    cols = colsCount.value;
    rows = rowsCount.value;
    holdTog = holdToggle.checked;
}

//cosnturct field
function constructField() {

    const field = document.createElement("div");
    field.classList = "field";
    field.setAttribute("id","field");
    field.style.cssText = "";
    document.querySelector("body").appendChild(field);
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
            pixel.addEventListener("mouseover", function(event) {changePixelColor(event.target);});
        }
        field.appendChild(row);
    }
}
//----------------------------------MAIN--------------------------------------

//initialization
let rows = 16;
let cols = 16;
let paint = "black";
let holdTog = true;
let paintList = ["black", "white", "purple", "blue", "green", "yellow", "orange", "red"];



const rowsCount = document.getElementById("rows");
const colsCount = document.getElementById("cols");
const holdToggle = document.getElementById("hold_input");
const confirm = document.getElementById("confirmButton");
confirm.addEventListener("click", () => {
    updateSettings();
    field.remove();
    constructField()})

rowsCount.value = rows;
colsCount.value = cols;
holdToggle.checked = holdTog

let mouseKey = false;
const body = document.querySelector("body");
body.addEventListener("mousedown", () => mouseKey=true);
body.addEventListener("mouseup", () => mouseKey=false);

//consturct paintboard
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
//construct default field
constructField()

