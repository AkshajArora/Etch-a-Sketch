const bigBox = document.querySelector(".container");

function createGrid(size) {
    let value = +(478/size)
    let totalBox = +(size*size)
    console.log(value)
    console.log(totalBox)

    for(let i = 1; i<=totalBox; i++) {
        bigBox.innerHTML += ("<div class='smallBox'></div>");
    }

    let smallBox = document.querySelectorAll(".smallBox");

    smallBox.forEach(box => {

            box.style.width = `${value}px`;
            box.style.height = `${value}px`;
    
        })
    

    smallBox.forEach(box => {
    box.addEventListener("mouseover", () => {

            box.classList.add("trailColor")

        });
     });
}

createGrid(16);

function clearSketch() {

    let newSize;
    let count = 1
    while(count) {
        newSize = +prompt('Enter a new value to create a new grid with the same value as rows and columns(max: 64)')

        if(isNaN(newSize) || newSize>64 || newSize<1) {
            alert('Enter a number between 1 to 50')
        }
        else{
            count = 0
        }
    }

    while(bigBox.firstChild) {
        bigBox.removeChild(bigBox.firstChild)
    }

    createGrid(newSize);
}

const btn = document.querySelector('button')
btn.addEventListener('click', clearSketch)
