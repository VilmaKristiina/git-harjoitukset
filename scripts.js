function setTime() {
  const now = new Date();
  const time = now.toLocaleTimeString("fi-FI");

  document.getElementById("datetime").textContent =
    "Kello on " + time;
}

setTime();
setInterval(setTime, 1000);