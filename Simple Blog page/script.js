const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const slider = document.querySelector(".slider");

openBtn.addEventListener("click", () => {
  slider.style.right = "0px";
  openBtn.classList.add("closed");
  closeBtn.classList.remove("closed");
  console.log("oprnBtn clicked");
});

closeBtn.addEventListener("click", () => {
  slider.style.right = "-344px";
  openBtn.classList.remove("closed");
  closeBtn.classList.add("closed");
});
