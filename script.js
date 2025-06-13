const player = document.getElementById("player");
let left = 100;
let bottom = 0;
const velocity = 5;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    left = Math.max(0, left - velocity);
  } else if (e.key === "ArrowRight") {
    left = Math.min(380, left + velocity); // 400 - largura do player
  } else if (e.key === "ArrowUp") {
    // Só sobe se estiver na escada
    if (left >= 180 && left <= 200 && bottom < 100) {
      bottom += velocity;
    }
  } else if (e.key === "ArrowDown") {
    if (left >= 180 && left <= 200 && bottom > 0) {
      bottom -= velocity;
    }
  }

  player.style.left = left + "px";
  player.style.bottom = bottom + "px";
});
