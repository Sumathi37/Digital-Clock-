
let ampm=document.getElementById('ampm');

function displayTime(){
    let dateTime= new Date();
let hr= padZero(dateTime.getHours());
let min= padZero(dateTime.getMinutes());
let sec= padZero(dateTime.getSeconds());
document.getElementById('hours').innerHTML=padZero(hr);
document.getElementById('minutes').innerHTML=min;
document.getElementById('seconds').innerHTML=sec;

if(hr>12){
    hr=hr-12
    ampm.innerHTML='PM'
}

function padZero(num){
    return num<10?"0"+num:num
}

}

setInterval(displayTime,500)