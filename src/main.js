//Header를 스크롤시 다크 스타일링 적용
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
//offsetHeight는 높이를 정수값으로 표현

document.addEventListener("scroll", () => {
  if (headerHeight < window.scrollY / 2) {
    header.classList.add("header--darker");
  } else if (headerHeight > window.scrollY / 2) {
    header.classList.remove("header--darker");
  }
});
//home 섹션을 아래로 스크롤시 투명하게
const home = document.querySelector("#home .max-container");
const homeHeight = home.getBoundingClientRect().height;
console.log(homeHeight);
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - scrollY / homeHeight;
});
