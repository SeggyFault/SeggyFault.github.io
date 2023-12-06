document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("mobile-nav-button")
    .addEventListener("click", function () {
      if (document.getElementById("mobile__nav").style.display === "block") {
        document.getElementById("mobile__nav").style.display = "none";
      } else {
        document.getElementById("mobile__nav").style.display = "block";
      }
    });
});

// Custom cursor
const myCursor = document.querySelector(".cursor");
const positionElement = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  myCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0);`;
};

window.addEventListener("mousemove", positionElement);
