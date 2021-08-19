function StopWatch(){
    let isStart = false;
    let isStop = false;
    let duration = 0;
    let startTime = 0;
    let endTime = 0;
    
    this.start = function (){
        if(isStart){
            return 'Stop Watch is already started';
        }
        else {
            isStart = true;
            isStop = false;
            startTime = new Date();
        }
    }

    this.stop = function (){
        if(isStop){
            return 'Stop Watch is already stopped';
        }
        else{
            isStop = true;
            isStart= false;
            endTime = new Date();

            duration = (endTime.getTime() - startTime.getTime()) / 1000;
        }
    }
    
    this.reset = function(){
        isStart = false;
        isStop = false;
        duration = 0;
        startTime = 0;
        endTime = 0;
    };

    Object.defineProperty(this, 'duration',{
        get: function(){
            return duration;
        }
    })
}

//
const sw = new StopWatch();

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
startButton.addEventListener('click',()=> {
    sw.start();
    document.getElementById("currentState").textContent = "Stopwatch started";
});

stopButton.addEventListener('click', ( )=> {
    sw.stop();
    document.getElementById("currentState").textContent = "Stopwatch stopped";
    document.getElementById('result').textContent = `${sw.duration} seconds`;

});

resetButton.addEventListener('click',() => {
    sw.reset();
    document.getElementById("currentState").textContent = "Click Start to run";
    document.getElementById('result').textContent = ``;
});

