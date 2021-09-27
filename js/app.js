// Start Define Global Variables
let navBar = document.querySelector("nav");
let uList = document.querySelector("nav ul");
let sections = document.querySelectorAll("section");
let scrollbutton = document.querySelector("i.scroll-top");
let toggleButton = document.querySelector(".bars");

// End Define Global Variables

// Toggle Button
function toggleBarsButton() {
  uList.classList.toggle("active");
  toggleButton.classList.toggle("active");
}
toggleButton.addEventListener("click", toggleBarsButton);

// Start build the nav
sections.forEach((ele) => {
  let contenet = `<li><a href="#${ele.getAttribute("id")}">${ele.getAttribute(
    "data-nav"
  )}</a></li>`;
  uList.insertAdjacentHTML("beforeend", contenet);
});
// End build the nav

// Start Add class 'active' to section when near top of viewport
const observeSection = () => {
  const ops = new IntersectionObserver(
    function (e) {
      e.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("active");
        } else {
          e.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.5 }
  );
  return sections.forEach((a) => ops.observe(a));
};
observeSection();
// End Add class 'active' to section when near top of viewport

// Start Scroll To Top Button
function scrollTop() {
  window.scrollTo(0, 0);
}
scrollbutton.addEventListener("click", scrollTop);

function buttonScroll() {
  window.scrollY >= 300
    ? scrollbutton.classList.add("active")
    : scrollbutton.classList.remove("active");
}
window.addEventListener("scroll", buttonScroll);
// End Scroll To Top Button