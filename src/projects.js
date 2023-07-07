"use strict";

const categories = document.querySelector(".categories");
const projectImgs = document.querySelectorAll(".project");
const realBtns = document.querySelectorAll(".category");

categories.addEventListener("click", (event) => {
  const filter = event.target.dataset.filter;
  handleActiveSelection(event.target);
  filterProjects(filter);
});

function handleActiveSelection(target) {
  if (target.nodeName === "BUTTON") {
    const active = document.querySelector(".category--selected");
    active.classList.remove("category--selected");
    target.classList.add("category--selected");
  }
}

function filterProjects(filter) {
  if (filter === undefined) {
    return;
  }
  projectImgs.forEach((img) => {
    img.classList.add("anim-out");
    if (filter === "*" || filter === img.dataset.id) {
      img.classList.remove("hide");
    } else {
      img.classList.add("hide");
    }
    setTimeout(() => {
      img.classList.remove("anim-out");
    }, 250);
  });
}
