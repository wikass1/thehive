const lines = document.querySelector(".lines-v");
const overlay = document.querySelector(".overlay");
const overlayHeight = overlay.clientHeight;
function openNav() {
  document.body.style.overflowY = "hidden";
  //   document.getElementById("myNav").style.opacity = "1";
  //   document.getElementById("myNav").style.visibility = "visible";
  //   document.getElementById("myNav").style.zIndex = "99";
  //   document.getElementById("myNav").style.transform = "translate(1)";
  document.getElementById("myNav").classList.add("is-open");
  // lines.style.height = `${overlayHeight}px`;
}

const exitBtn = document.querySelector(".exit-btn");

exitBtn.addEventListener("click", function () {
  document.body.style.overflowY = "auto";
  document.getElementById("myNav").classList.remove("is-open");
});
