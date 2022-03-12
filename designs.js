// Select color input
const colorInput = document.querySelector("#colorPicker");

// Select size input
const gridHeight = document.getElementById("inputHeight")
const gridWidth = document.getElementById("inputWidth") // When size is submitted by the user, call makeGrid()
const gridForm = document.getElementById("sizePicker")
const submitBTN = document.getElementById("submit-BTN")
const eraseBTN=document.getElementById("erase")
let draw = false;

function makeGrid() {
    // Your code goes here!
    const tableData = document.getElementsByTagName('td')
    // assigns the user inputs to the current grid height and grid with variables as well as the current color choice
    const table = document.getElementById("pixelCanvas")
    // Grabs the grid heigh that the user inputs
    const currentGridHeight = gridHeight.value;
    //grabs the grid width that the user inputs
    const currentGridWidth = gridWidth.value;
    // Creates a table based on the users inputs for height and width
    for (let i = 0; i < currentGridHeight; i++) {
        // creates new table rows to allow new table data to append to
        const tableRow = document.createElement("tr");
        // appends new table rows to the existing table
        table.appendChild(tableRow);
        for (let c = 0; c < currentGridWidth; c++) {
            // creates the columns for the grid
            const newtableData = document.createElement("td");
            // assigns a class called pixel to the table cells
            newtableData.classList.toggle('pixel');
            // allows the user to drag over the cells the want to change color

            newtableData.addEventListener("click", function () {
                // Allows the user to drag and color the pixels of their choice
                //this grabs the value of the Color that the user selects
                var currentColor = colorInput.value;
                // this changes the background color of each table data that the user mouses over
                newtableData.style.backgroundColor = currentColor;

            })
            // While your mouse is clicked down it will allow you to color the cells that you drag it over.
            newtableData.addEventListener("mousedown", function () {
                draw = true
                var mouseDownColor = colorInput.value;
                newtableData.style.backgroundColor = mouseDownColor;

            })
            // Does not allow you to color in pixels unless you hold down the left mouse
            newtableData.addEventListener("mouseup", function () {
                draw = false
            })
            newtableData.addEventListener("mouseover", function () {
                if (!draw) return
                var currentColor = colorInput.value;
                newtableData.style.backgroundColor = currentColor;
            })
            // allows you to reset the grid and removes the colored pixels
            submitBTN.addEventListener("click", function () {
                if (newtableData.style.backgroundColor != "#fff") {
                    newtableData.style.backgroundColor = "#fff"
                    // removes any new table cells that may be created when the submit button is pushed again
                    newtableData.remove()
                }
                draw = false
            })
            // Adds new table cells to the table rows
            tableRow.appendChild(newtableData);


        }

    }

}
function erasePixels(){
    if(document.getElementsByTagName("td").style.backgroundColor!="#fff"){
        document.getElementsByTagName("td").style.backgroundColor="#fff"
    }
}