//dom
const hour = document.querySelector("#hour")
const minutes = document.querySelector("#minute")
const second = document.querySelector("#second")
const start = document.querySelector(".btn-start")
const reset = document.querySelector(".btn-reset")


var startTimer = null;

start.addEventListener("click",startInterval)
reset.addEventListener("click",resetTime)


function startInterval(){ //it needs a function that execute repeatedly after 1 sec
   startTimer= setInterval(()=>{timer()},1000)
}

function timer(){
    if(hour.value ==0 && minutes.value==0 && second.value==0){ //when all colums is zero
        hour.value=0;
        minutes.value=0;
        second.value=0;
    }
    else if(second.value != 0){ //when second has any value it will start to decrement
        second.value--;
    }
    else if(minutes.value !=0 && second.value==0){ //1 minute is given to second place
         minutes.value--
         second.value= 59
    }
else if(hour.value !=0 && minutes.value==0){ //1 hour is given to minuts
    hour.value--
    minutes.value= 60;
}
return 
}


function resetTime(){ //when reset button is pressed set everything to zero
    hour.value=0;
        minutes.value=0;
        second.value=0;

}