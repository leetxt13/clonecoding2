// 구현 계획
// 1. 모든 섹션과 메뉴 아이템들을 가져옴
// 2. intersectionObserver로 모든 섹션을 관찰
// 3. 보여지는 섹션에 해당하는 메뉴아이템을 활성화
// 보여지는 섹션 :
// - 다수 섹션이 동시에 보일경우, 가장 첫번째 섹션을 선택
// - 마지막 contact 섹션이 보일때는, 가장 마지막 섹션 선택

const sectionIds = [
  "#home",
  "#about",
  "#skills",
  "#work",
  "#testimonials",
  "#contact",
];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`*[href="${id}"]`)
);
const visibleSections = sectionIds.map(() => false);
let activeNavItem = navItems[0];

let observerCallback = (entries, observer) => {
  let selectLastOne; // flag변수(참,거짓)

  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne = // 마지막 index이고,진입중이고,99프로 보이면 변수를 true로 설정
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.9;
  });

  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstInterSecting(visibleSections);

  selectNavItem(navIndex);
};

function selectNavItem(index) {
  const navItem = navItems[index];
  if (!navItem) return; // navItem을 못 찾는다면, 종료되도록
  // activeNavItem은 처음에는 active 설정된 home을 가리킴
  activeNavItem.classList.remove("active");
  activeNavItem = navItem;
  activeNavItem.classList.add("active");
}

function findFirstInterSecting(intersections) {
  const index = intersections.indexOf(true);
  // indexOf는 찾는 값이 없는 경우 -1을 호출함
  return index >= 0 ? index : 0;
}
let options = {
  rootMargin: "-20% 0px 0px 0px", // 상단 section이 얼마 안 남았을 때, true 해제되도록 설정
  threshold: [0, 0.95],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => {
  observer.observe(section);
});
