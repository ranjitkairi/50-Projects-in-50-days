// block element and variables

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});


// Remove function
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
