const navlinkElem = document.querySelectorAll(".nav-link");

navlinkElem.forEach((navElem) => {
  navElem.addEventListener("click", () => {
    document.querySelector(".active-link")?.classList.remove("active-link");
    navElem.classList.add("active-link");
  });
});
