let hour = document.getElementById('setHour');
let mnt = document.getElementById('setMnt');
let scnd = document.getElementById('setScnd');
let day = document.getElementById('day');
let btn = document.getElementById('btn');
var audio = new Audio(
  'https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3'
);
function ringBell() {
  audio.play();
}
let display = document.getElementById('display');
function displayTime() {
  time = new Date();
  display.textContent = time.toLocaleTimeString();
}
setInterval(displayTime, 1000);
// displayTime()

btn.addEventListener('click', setAlarm);
function setAlarm() {
  console.log('button cliced');
  let setHour = hour.value;
  let setMnt = mnt.value;
  let setScnd = scnd.value;
  let setDay = day.value;
  console.log(setHour, setMnt, setScnd, setDay);
}
