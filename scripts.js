
function setTime() {
  const now = new Date();
  const time = now.toLocaleTimeString("fi-FI");

  document.getElementById("datetime").textContent =
    "Kello on " + time;
}
