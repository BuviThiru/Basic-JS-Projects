//Array to generate colors

const colorGeneratorArray = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]



//select
const color =  document.querySelector(".color")
const button = document.querySelector(".btn")


//event listener
button.addEventListener("click", changeBackgroundColor)


//functions
function changeBackgroundColor(){
    let hexColor =  "#";
    for(let i=0;i<6;i++){
        let randomNumber =parseInt(Math.random()*colorGeneratorArray.length)
        hexColor = hexColor+colorGeneratorArray[randomNumber] 
    }
    
    document.body.style.backgroundColor = hexColor
    color.innerHTML = hexColor
    button.style.backgroundColor = hexColor
} 