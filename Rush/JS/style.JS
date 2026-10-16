const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function (dd) {
  const btn = dd.querySelector(".dropbtn");
  btn.addEventListener("click", function () {
    dropdowns.forEach(function (other) {
      if (other !== dd) {
        other.classList.remove("open");
        other.querySelector(".dropbtn").setAttribute("aria-expanded", "false");
      }
    });
    const open = dd.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
});

document.addEventListener("click", function (e) {
  dropdowns.forEach(function (dd) {
    if (!dd.contains(e.target)) {
      dd.classList.remove("open");
      dd.querySelector(".dropbtn").setAttribute("aria-expanded", "false");
    }
  });
});