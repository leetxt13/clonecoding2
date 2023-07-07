"use strict";

const buttons = document.querySelector(".categories");
const projectImgs = document.querySelectorAll(".project");
buttons.addEventListener("click", (event) => {
  console.log(event.target.dataset.filter);
  const filter = event.target.dataset.filter;
  projectImgs.forEach((img) => {
    img.classList.add("anim-out");
    if (filter === "*") {
      projectImgs.forEach((img) => {
        img.classList.remove("hide");
      });
    }
    if (img.dataset.id !== filter && filter !== "*") {
      img.classList.add("hide");
    } else if (img.dataset.id === filter) {
      img.classList.remove("hide");
    }
    setTimeout(() => {
      img.classList.remove("anim-out");
    }, 200);
  });
});
