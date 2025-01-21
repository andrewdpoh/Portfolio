window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY != 0) {
    nav.classList.add("bg-dark");
  } else {
    nav.classList.remove("bg-dark");
  }
});
