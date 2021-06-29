// Block element and variables
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

// Add Event Listener
btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
