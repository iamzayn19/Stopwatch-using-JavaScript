
sec = 0;
min = 0;
hr = 0;
let timer;

start = function(){
   sec += 1;
   var x = document.getElementById('sec');

   if (sec < 60)
   {
    if(sec < 10)
        x.innerHTML = '0' + sec;
    else
        x.innerHTML = sec;
   }
   else
   {    
        x.innerHTML = '00';
        sec = 0;
        min += 1;
        x = document.getElementById('min');

        if (min < 60)
        {
            if(min < 10)
                x.innerHTML = '0' + min;
            else
                x.innerHTML = min;
        }
        else 
        {   
            x.innerHTML = '00';
            min =0;
            sec = 0;
            hr += 1;
            x = document.getElementById('hr');

            if (hr < 24)
            {
                if (hr < 10)
                    x.innerHTML = '0' + hr;
                else
                    x.innerHTML = hr;
            }
            else
            {   x.innerHTML = '00';
                hr = 0;
                min = 0;
                sec = 0;
                alert("Its been one day!");
            }
        }
        
   }

   
}

startTimer = function() {
    timer = setInterval(start , 1000);
    var x = document.getElementById('start');
    x.setAttribute('disabled','disabled');
}

stopTimer = function(){
    clearInterval(timer);
    document.getElementById('start').disabled = false;
   
}

resetTimer = function()
{   
    sec = 0;
    hr = 0;
    min = 0;
    clearInterval(timer);
    document.getElementById("sec").innerHTML= '00';
    document.getElementById("min").innerHTML= '00';
    document.getElementById("hr").innerHTML= '00';  
    
    document.getElementById('start').disabled = false;
}

