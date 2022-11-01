//Array of colors

const colorArray = ["green", "red" , "blue", "aqua", "gray" , "lightgreen", "lightcoral", "pink"]



//select
const color =  document.querySelector(".color")
const button = document.querySelector(".btn")


//event listener
button.addEventListener("click", changeBackgroundColor)


//functions
function changeBackgroundColor(){
    let randomNumber =parseInt(Math.random()*colorArray.length) 
    document.body.style.backgroundColor = colorArray[randomNumber]
    color.innerHTML = colorArray[randomNumber]
    button.style.backgroundColor = colorArray[randomNumber]
}