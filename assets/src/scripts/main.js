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
