const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");
const topBar = document.querySelector(".top-bar");
const openButton = document.querySelector(".top-bar span");
const closeButton = document.querySelector(".close-button");
const allLinks = document.querySelectorAll(".sidebar a");

allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeSidebar();
  });
});

topBar.addEventListener("click", () => {
  openSidebar();
});
closeButton.addEventListener("click", () => {
  closeSidebar();
});

document.body.addEventListener("scroll", () => {
  if (document.body.scrollTop >= 100) {
    topBar.style.backgroundColor = "#333";
  } else {
    topBar.style.backgroundColor = "transparent";
  }
});

function openSidebar() {
  document.getElementById("sidebar").style.left = "0";
  openButton.style.display = "none";
}

function closeSidebar() {
  openButton.style.display = "block";
  document.getElementById("sidebar").style.left = "-250px";
  document.querySelector(".top-bar").style.display = "block";
}
