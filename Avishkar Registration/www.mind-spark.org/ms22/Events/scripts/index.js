const expander = document.querySelectorAll(".expander");
const collapser = document.querySelectorAll(".collapser");
const expandingbtn = document.querySelectorAll(".expander-button");
const collapsingbtn = document.querySelectorAll(".collapsing-button");
const subevents = document.querySelectorAll(".subevents");
const modulelogo = document.querySelectorAll(".module-logo");

for (let i = 0; i < expandingbtn.length; i++) {
  expandingbtn[i].addEventListener("click", () => {
    modulelogo[i].classList.add("module-logo-hidden");
    subevents[i].classList.add("subevents-visible");
    collapser[i].classList.add("collapser-visible");
    expander[i].classList.add("expander-hidden");
  });
}

for (let i = 0; i < collapsingbtn.length; i++) {
  collapsingbtn[i].addEventListener("click", () => {
    modulelogo[i].classList.remove("module-logo-hidden");
    subevents[i].classList.remove("subevents-visible");
    collapser[i].classList.remove("collapser-visible");
    expander[i].classList.remove("expander-hidden");
  });
}

const modules = document.querySelectorAll(".module");

if (window.innerWidth < 992) {
  for (let i = 0; i < modules.length; i++) {
    modules[i].attributes.removeNamedItem("data-aos");
  }
}
