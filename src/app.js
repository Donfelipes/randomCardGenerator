document
  .getElementById("change-card-button")
  .addEventListener("click", randomCard);
let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
let pinta = ["♥", "♦", "♠", "♣"];

function randomCard() {
  let numberRandom = number[Math.floor(Math.random() * number.length)];
  let pintaRandom = pinta[Math.floor(Math.random() * pinta.length)];
  document.getElementById("first-icon").textContent = pintaRandom;
  document.getElementById("card-number").textContent = numberRandom;
  document.getElementById("second-icon").textContent = pintaRandom;
  let hearts = document.querySelectorAll(".heart");

  if (pintaRandom != "♥") {
    hearts[0].style.color = "black";
    hearts[1].style.color = "black";
  } else {
    hearts[0].style.color = "red";
    hearts[1].style.color = "red";
  }
}
