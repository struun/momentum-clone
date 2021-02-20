const clock = document.querySelector("#clock");

function showClock() {
    const date = new Date(),
          hours = date.getHours(),
          minutes = date.getMinutes(),
          seconds = date.getSeconds();

      clock.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

setInterval(showClock, 1000);