const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const btn = document.getElementById("btn");
const header = document.querySelector("h1");
const body = document.querySelector("body");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (audio1.paused) {
    audio1.play();
    audio2.play();
    // header.style.color = "red";
    header.innerHTML = "You did a mistake 💀"
    btn.innerHTML = "turn on lights 💡"
    body.style.backgroundImage = "url(/img/img4.jpg)";
  } else {
    audio1.pause();
    audio2.pause();
    body.style.backgroundImage = "url(/img/bg.jpg)";
    header.innerHTML = "Don't turn off the lights 😨"
    btn.innerHTML = "turn off lights 🔌"


  }
});
