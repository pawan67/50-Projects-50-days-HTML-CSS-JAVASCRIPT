const inputEl = document.getElementById("inputELL");
const btnEl = document.querySelector(".btn");
const containerEl = document.querySelector(".container");
btnEl.addEventListener("click", () => {
    const val = inputEl.value;
    console.log(val);
  containerEl.innerHTML.appendChild = `<li>${val}</li>`
  inputEl.value = "";
});
