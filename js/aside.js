// <stdin>
window.addEventListener("load", (event) => {
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
