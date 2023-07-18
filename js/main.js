// <stdin>
function updateTheme(isDark) {
  document.documentElement.classList.toggle("light-theme", !isDark);
  sessionStorage.setItem("theme", isDark ? "dark" : "light");
}
function initializeTheme() {
  let theme = sessionStorage.getItem("theme");
  let isDark = true;
  if (theme !== null && theme === "light") {
    isDark = false;
  }
  if (theme === null && window.matchMedia) {
    const darkSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    darkSchemeMediaQuery.addEventListener("change", (e) => updateTheme(e.matches));
    updateTheme(darkSchemeMediaQuery.matches);
  } else {
    updateTheme(isDark);
  }
  let toggle = document.querySelector(".nav-theme");
  toggle.onclick = (event) => {
    updateTheme(!(sessionStorage.getItem("theme") === "dark"));
    event.preventDefault();
    event.stopPropagation();
  };
}
window.addEventListener("load", (event) => {
  initializeTheme();
  let nav = document.querySelectorAll(".aside-li");
  let headings = [];
  for (let i = 0; i < nav.length; i++) {
    let li = nav[i];
    headings.push(document.getElementById(li.dataset["anchor"]));
  }
  let active = null;
  let margin = 24;
  function scrollHandler() {
    if (Math.ceil(window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      if (active != null) {
        active.classList.remove("active");
      }
      active = nav[headings.length - 1];
      active.classList.add("active");
      return;
    }
    let i = 0;
    let position = -1;
    let heading = null;
    for (i = 0; i < headings.length; i++) {
      heading = headings[i];
      position = heading.getBoundingClientRect().top;
      if (position >= margin) {
        break;
      }
    }
    if (active != null) {
      active.classList.remove("active");
    }
    if (i <= 0) {
      active = void 0;
    } else {
      active = nav[i - 1];
      active.classList.add("active");
    }
  }
  document.onscroll = () => {
    scrollHandler();
  };
  scrollHandler();
});
