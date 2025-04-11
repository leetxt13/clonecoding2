"use strict";

//Header를 스크롤시 다크 스타일링 적용
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
//offsetHeight는 높이를 정수값으로 표현

document.addEventListener("scroll", () => {
  if (headerHeight < window.scrollY / 3) {
    header.classList.add("header--darker");
  } else if (headerHeight > window.scrollY / 3) {
    header.classList.remove("header--darker");
  }
});
//home 섹션을 아래로 스크롤시 투명하게
const home = document.querySelector("#home .max-container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - scrollY / homeHeight;
});

//화살표 버튼 스코롤시 home에서는 안 보이게
const wholeHome = document.querySelector("#home");
const wholeHomeHeight = wholeHome.offsetHeight;
const arrow = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (scrollY > wholeHomeHeight / 2) {
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = 0;
  }
});

// toggle버튼을 누르면 nav메뉴 보이고, 사라지게
const toggleBtn = document.querySelector(".header__toggleBtn");
const headerMenu = document.querySelector(".header__menu");

toggleBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("open");
});

headerMenu.addEventListener("click", (event) => {
  if (event.target.nodeName === "A") {
    headerMenu.classList.remove("open");
  }
});

// projects 사진들 grid 조정

const btns = document.querySelector(".projects__btns")
const projects = document.querySelector(".projects")
btns.addEventListener("click",(e)=>{
  if(e.target.nodeName!=="BUTTON"){
    return;
  }
  projects.style.gridTemplateColumns = `repeat(${e.target.dataset.gridline},1fr)`
  }
)