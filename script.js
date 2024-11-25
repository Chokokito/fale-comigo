let menuicon = document.querySelector(".menu-icon");
let sidenav = document.querySelector(".sidenav");
menuicon.addEventListener("click", () => {
  sidenav.classList.toggle("show");
});
