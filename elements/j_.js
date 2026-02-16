function setup() {
  createCanvas(800, 400);
  background(9);
  strokeWeight(1.5);
}

let t = 0;

function draw() {
  // 1. MAGIC TRAILS
  // A very low opacity background creates the "ghost" effect
  background(9, 20);

  t += 0.02;

  translate(width / 2, height / 2);

  // We draw 2000 particles every frame to form the creature
  for (let i = 0; i < 2000; i++) {

    // -- THE SKELETON (Mathematical Order) --
    // We normalize 'i' to a 0-1 range to act as a position along the wing
    let u = i / 1000;

    // The "Body" oscillation
    let bodyY = sin(t * 2 + u) * 20;

    // -- THE CHAOS (The "Glitch") --
    // We use bitwise XOR to create "feathers" that look like digital errors.
    // (i ^ 12) scatters the points locally but keeps them structured.
    let noiseVal = (i ^ 12) % 50;

    // -- THE WING MATH --
    // We create two wings (left and right) using the parity of i
    // If i is even, go left. If odd, go right.
    let side = (i % 2 == 0) ? 1 : -1;

    // The "Bone" of the wing
    // We add 'u' to the phase to make the wing "whip" like a fluid
    let wingAngle = sin(t * 3 - u * 2) * (PI / 3);

    // Base position along the wing (Radius)
    // We stretch it out: u * 150
    let r = u * 150 + noiseVal; // Add the glitch to the length

    // -- POLAR TO CARTESIAN --
    let x = side * r * cos(wingAngle);
    let y = bodyY + r * sin(wingAngle);

    // -- THE MAGIC DISPLACEMENT --
    // We add a "turbulence" term using sine waves of high frequency
    // This makes the bird look like it is made of smoke or energy
    x += sin(y * 0.1 + t * 5) * 5;
    y += cos(x * 0.1 + t * 5) * 5;

    // -- COLOR --
    // Fade from white center to blue/purple tips
    stroke(150 + u * 100, 200 - u * 50, 255, 180);

    point(x, y);
  }
}