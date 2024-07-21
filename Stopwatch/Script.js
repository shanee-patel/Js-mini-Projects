let [second, minute, hours]= [0,0,0];
let displayTime = document.getElementById("time")
let timer = null;

function stopWatch(){
    second++;
    if(second === 60){
        second=0;
        minute++;
        if(minute === 60){
            minute = 0;
            hours++;
        }
    }

    let s = second<10 ? "0"+second : second;
    let m = minute<10 ? "0"+minute : minute;
    let h = hours<10 ? "0"+hours : hours;

    time.innerHTML = h+":"+m+":"+s;
}

//timeinterval function

function watchStart(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer =setInterval(stopWatch,1000);
}
function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [second, minute, hours]= [0,0,0];
    time.innerHTML = "00:00:00";

}