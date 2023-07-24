const display = document.getElementById("display")
const startBtn = document.getElementById("start")
const resetBtn = document.getElementById("reset")

let interval;


startBtn.addEventListener('click', () => {
    const inputMin = document.getElementById("inputMin")
    const inputSeg = document.getElementById("inputSeg")
    
    let totalSeconds = parseInt(inputMin.value) * 60 + parseInt(inputSeg.value)
    updateDisplay(totalSeconds)

   
      if (totalSeconds > 0 && !interval) {
        interval = setInterval(function () {
          totalSeconds--;
          updateDisplay(totalSeconds);
  
          if (totalSeconds <= 0) {
            clearInterval(interval);
            interval = null;
          }
        }, 1000);
      }
    

    


})




function updateDisplay(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }


