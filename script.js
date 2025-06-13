const player = document.getElementById("player");
let left = 100;
let bottom = 0;
let velocity = 5;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    left -= velocity;
  } else if (e.key === "ArrowRight") {
    left += velocity;
  } else if (e.key === "ArrowUp") {
    bottom += velocity;
  } else if (e.key === "ArrowDown") {
    bottom -= velocity;
  }

  player.style.left = left + "px";
  player.style.bottom = bottom + "px";
});
