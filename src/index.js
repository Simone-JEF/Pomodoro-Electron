let startBtn = document.getElementById('start')
let resetBtn = document.getElementById('reset')
let pauseBtn = document.getElementById('pause')

let studyMins = document.getElementById('study-mins')
let studySecs = document.getElementById('study-secs')

let breakMins = document.getElementById('break-mins')
let breakSecs = document.getElementById('break-secs')

let cycles = document.getElementById('cycles')

let startTimer

startBtn.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running")
    }    
})

resetBtn.addEventListener('click', function(){
    studyMins.innerText = 25
    studySecs.innerText = "00"

    breakMins.innerText = 5
    breakSecs.innerText = "00"

    cycles.innerText = 0
    stopInterval()
    startTimer = undefined
})

pauseBtn.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined
})

function timer(){
     // Work Timer Countdown
     if(studySecs.innerText != 0){
        studySecs.innerText--
    } else if(studyMins.innerText != 0 && studySecs.innerText == 0){
        studySecs.innerText = 59
        studyMins.innerText--
    }

    // Break Timer Countdown
    if(studyMins.innerText == 0 && studySecs.innerText == 0){
        if(breakSecs.innerText != 0){
            breakSecs.innerText--
        } else if(breakMins.innerText != 0 && breakSecs.innerText == 0){
            breakSecs.innerText = 59
            breakMins.innerText--
        }
    }

    // Cycle Counter Logic
    if(studyMins.innerText == 0 && studySecs.innerText == 0 && breakMins.innerText == 0 && breakSecs.innerText == 0){
        studyMins.innerText = 25
        studySecs.innerText = "00"

        if (cycles.innerText % 3 == 0){
            breakMins.innerText = 25
            breakSecs.innerText = "00"
        } else {
            breakMins.innerText = "05"
            breakSecs.innerText = "00"
        }

        cycles.innerText++
    }      
}

function stopInterval(){
    clearInterval(startTimer)
}
