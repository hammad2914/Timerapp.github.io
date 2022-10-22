var hrsvalue = document.getElementById("hvalue");
var minvalue = document.getElementById("mvalue");
var svalue = document.getElementById("svalue");

hrsvalue.value=00
minvalue.value=00
svalue.value=00


var hrs = document.getElementById("hrs")
var min = document.getElementById("mins")
var sec = document.getElementById("sec")
var msec = 0

var btn = document.getElementById("start")
var stopbtn = document.getElementById("stop")
var resetbtn = document.getElementById("reset")

var interval;

function settime(){
    hrs.innerHTML=hrsvalue.value
    min.innerHTML=minvalue.value
    sec.innerHTML=svalue.value

    var main = document.getElementById("main")
    main.style.display="none"
    var main1 = document.getElementById("main1")
    main1.style.display="block"
}

function timer(){
    msec++
    if(msec>=99){
        sec.innerHTML--
        msec=0
    }
    else if(sec.innerHTML ==0){
        sec.innerHTML=60
        min.innerHTML--
    }
    else if(min.innerHTML ==0){
        min.innerHTML=59
        hrs.innerHTML--
    }
    else if( hrs.innerHTML == 0 && min.innerHTML == 0 && sec.innerHTML == 0 ){
        clearInterval(interval);
        hrs.innerHTML=00
        min.innerHTML=00
        sec.innerHTML=00
    }
}

function start(){
    interval= setInterval(timer,10)

    btn.disabled = true
    stopbtn.disabled = false
    resetbtn.disabled = false
}

function stop(){
    clearInterval(interval);

    btn.disabled = false
    stopbtn.disabled = true
    resetbtn.disabled = false
}


function reset(){
    clearInterval(interval);
    var main1 = document.getElementById("main1")
    main1.style.display="none"
    var main = document.getElementById("main")
    main.style.display="block"

    btn.disabled = false
    stopbtn.disabled = true
    resetbtn.disabled = true
}
