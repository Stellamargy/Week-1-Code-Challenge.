let p = document.querySelector("#speed");
let speed = prompt("Put speed");
//no overspeeding
if (speed <= 70) {
  p.innerHTML = "OK";
  //overspeeding
} else if (speed > 70) {
  let exceeded = speed - 70;
  let points = exceeded / 5;
  //calculates when points is 12 or greater than 12
  if (points >= 12) {
    p.innerHTML = "License suspended";
  } else {
    p.innerHTML = "Points: " + points;
  }
}