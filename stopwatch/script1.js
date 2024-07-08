var isStop = true;
var sec = 0;
var min = 0;
var hr = 0;
var laps = [];
function Play() {
    if (isStop == true) {
        isStop = false;
        timer();
    }
}

function timer() {
    if (isStop == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        sec++;
        
        if (sec == 60) {
            sec = 0;
            min++;
        }

        if (min == 60) {
            min = 0;
            hr++;
        }

        if (sec < 10) {
            sec = "0" + sec;
        }

        if (min < 10) {
            min = "0" + min;
        }

        if (hr < 10) {
            hr = "0" + hr;
        }

       
        stopwatch.innerHTML = hr + " : " + min + " : " + sec;
        setTimeout("timer()", 1000);
    }
}

function Pause() {
    isStop = true;
}

function lap()
{
   const laptime = `${hr} : ${min} : ${sec}`;
   laps.push(laptime);
   displayLaps();
}

function displayLaps()
{
    const lapcont = document.getElementById("myDiv");
    lapcont.innerHTML = "";
    laps.forEach((laptime, index) => {
        const li = document.createElement("div");
        li.textContent = `lap ${index + 1} : ${laptime}`;
        lapcont.appendChild(li);
    });
}

function reset() {
    isStop = true;
    sec = 0;
    min = 0;
    hr = 0;

    stopwatch.innerHTML = "00 : 00 : 00 ";
}