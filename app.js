var min = 0;
var sec = 0;
var msec = 0;
var dminhead = document.getElementById("min");
var dsechead = document.getElementById("sec");
var dmsechead = document.getElementById("msec");
var interval;

function timer() {
    msec++
    dmsechead.innerHTML = msec;
    if (msec >= 100) {
        sec++
        dsechead.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++
        dminhead.innerHTML = min;
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer, 10)
    document.getElementById("start").disabled = true;
}

function stop() {
    clearInterval(interval)
    document.getElementById("start").disabled = false;
}

function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    dminhead.innerHTML = min;
    dsechead.innerHTML = sec;
    dmsechead.innerHTML = msec;
    clearInterval(interval)
    document.getElementById("start").disabled = false;
}