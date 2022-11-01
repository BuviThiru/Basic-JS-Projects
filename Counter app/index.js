//METHOD ONE

// //DOM Access

// const increase = document.querySelector(".btn-increase")
// const reset = document.querySelector(".btn-reset");
// const decrease = document.querySelector(".btn-decrease")
// const count = document.querySelector(".count")


// //Adding event listeners

// increase.addEventListener("click" , increaseCount);
// decrease.addEventListener("click",decreaseCount);
// reset.addEventListener("click", resetCount)



// //functions

// function increaseCount(){   
//      count.innerHTML = Number(count.innerHTML)+1   
     
// }


// function decreaseCount(){  
//     if(count.innerHTML>0) 
//     count.innerHTML = Number(count.innerHTML)-1
     
// }

// function resetCount(){
//     count.innerHTML = 0;
// }


//METHOD TWO

let count = 0
const value = document.querySelector(".count")
const btn = document.querySelectorAll(".btn")

btn.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList
        if(styles.contains('btn-increase')){
            count++
        }
        else if(styles.contains('btn-decrease')){
            count--
        }
        else{
            count=0
        }
        if (count > 0) {
            value.style.color = 'green'
        }
        if (count < 0) {
            value.style.color = 'red'

        }
        if (count === 0) {
            value.style.color = 'black'

        }
    value.innerHTML = count;
    })
})