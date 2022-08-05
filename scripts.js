const button = document.querySelector("button.toggle-mode");

button.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
