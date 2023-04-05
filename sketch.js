num = prompt("Choose a number between 1-3 to select a color for the circle!")
function setup() {
  createCanvas(800, 800);
}
function mousePressed() {
  if(num == 1) {
      fill(255, 204, 0)
      ellipse(mouseX, mouseY, random(50), random(50))
    } else if (num == 2) {
      fill('red')
      ellipse(mouseX, mouseY, random(50), random(50))
    } else if (num == 3) {
      fill('green')
      ellipse(mouseX, mouseY, random(50), random(50))
    }
}