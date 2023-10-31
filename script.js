const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secondsEL = document.getElementById("seconds");

const newViagem = new Date(" December 20, 2023 15:00:00")


function contador() {
  const newViagemDate = new Date(newViagem);
  const currentDate = new Date();

  const totalSeconds = (newViagemDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEL.innerHTML = formatTime(mins);
  secondsEL.innerHTML = formatTime(seconds);

}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;

}

contador();

setInterval(contador, 1000);

let time = 4000,
  currentImageIndex = 0,
  images = document
    .querySelectorAll("#slider img")
max = images.length;

function nextImage() {

  images[currentImageIndex]
    .classList.remove("selected")

  currentImageIndex++

  if (currentImageIndex >= max)
    currentImageIndex = 0

  images[currentImageIndex]
    .classList.add("selected")
}

function start() {
  setInterval(() => {
    // troca de image
    nextImage()
  }, time)
}

window.addEventListener("load", start)

