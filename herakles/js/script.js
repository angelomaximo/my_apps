// REST STOPWATCH
    let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    let timerRef = document.querySelector('.timerDisplay');
    let int = null;

    document.getElementById('startTimer').addEventListener('click', () => {
        if (int!==null) {
            clearInterval(int);
        }
        int = setInterval(displayTimer,10);
    });

    document.getElementById('pauseTimer').addEventListener('click', () => {
        clearInterval(int);
    });

    document.getElementById('resetTimer').addEventListener('click', ()=>{
        clearInterval(int);
        [milliseconds,seconds,minutes,hours] = [0,0,0,0];
        timerRef.innerHTML = '00 : 00 : 00 : 000 ';
    });

    function displayTimer () {
        milliseconds += 10;

        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;
            
            if (seconds == 60) {
                seconds = 0;
                minutes++;
            
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }

        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds <
        100 ? "0" + milliseconds : milliseconds;

        timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
    }



let [millisecondsNAV,secondsNAV,minutesNAV,hoursNAV] = [0,0,0,0];
let timerRefNAV = document.querySelector('.timerDisplayNAV');
let intNAV = null;

document.getElementById('startTimerNAV').addEventListener('click', () => {
    if (intNAV!==null) {
        clearInterval(intNAV);
    }
    intNAV = setInterval(displayTimer,10);
});

document.getElementById('pauseTimerNAV').addEventListener('click', () => {
    clearInterval(intNAV);
});

document.getElementById('resetTimerNAV').addEventListener('click', ()=>{
    clearInterval(intNAV);
    [millisecondsNAV,secondsNAV,minutesNAV,hoursNAV] = [0,0,0,0];
    timerRefNAV.innerHTML = '00 : 00 : 00 : 000 ';
});

function displayTimerNAV () {
    millisecondsNAV += 10;

    if (millisecondsNAV == 1000) {
        millisecondsNAV = 0;
        secondsNAV++;
        
        if (secondsNAV == 60) {
            secondsNAV = 0;
            minutesNAV++;
        
            if (minutesNAV == 60) {
                minutesNAV = 0;
                hoursNAV++;
            }
        }
    }

    let hNAV = hoursNAV < 10 ? "0" + hoursNAV : hoursNAV;
    let mNAV = minutesNAV < 10 ? "0" + minutesNAV : minutesNAV;
    let sNAV = secondsNAV < 10 ? "0" + secondsNAV : secondsNAV;
    let msNAV = millisecondsNAV < 10 ? "00" + millisecondsNAV : millisecondsNAV <
    100 ? "0" + millisecondsNAV : millisecondsNAV;

    timerRefNAV.innerHTML = `${hNAV} : ${mNAV} : ${sNAV} : ${msNAV}`;
}