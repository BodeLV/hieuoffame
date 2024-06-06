const menuBar = document.querySelector(".menu-bar");
menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("active");
  document.querySelector(".menu-items").classList.toggle("active");
});
window.addEventListener("scroll", () => {
  const x = window.scrollY;
  if (x > 80) {
    document.querySelector(".top").classList.add("active");
  } else {
    document.querySelector(".top").classList.remove("active");
  }
});
const inducteesTitle = document.querySelector(".inductees-title");
inducteesTitle.addEventListener("click", (x) => {
  if (x.target.classList.contains("inductees-button")) {
    const tarGet = x.target.getAttribute("data-title");
    inducteesTitle.querySelector(".active").classList.remove("active");
    x.target.classList.add("active");
    const inducteesItem = document.querySelector(".inductees");
    inducteesItem
      .querySelector(".inductees-item-content.active")
      .classList.remove("active");
    inducteesItem.querySelector(tarGet).classList.add("active");
  }
});
