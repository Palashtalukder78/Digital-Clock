function digitalClock(){
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();
  let timeFormat = 'AM';

  if(hour==0){
    hour = 12;
  }
  
  if(hour>12){
    hour = hour-12;
    timeFormat = "PM";
  }
  hour = hour < 10 ? '0'+hour : hour;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  second = second < 10 ? '0'+second : second;
  /*
  if(hour<10){
    hour = `0${hour}`;
  }
  if(minutes<10){
    minutes = `0${minutes}`;
  }
  if(second<10){
    second = `0${second}`;
  }
  */
  let finalTime = `${hour}: ${minutes}: ${second}`;
  document.getElementById("time").innerText = finalTime;
  document.querySelector("small").innerText = timeFormat;

  setInterval(digitalClock, 1000);
}
digitalClock();

