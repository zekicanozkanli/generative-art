function setup() {
    createCanvas(800, 800);
    background(9);
    strokeWeight(2);
}

let t = 0;

function draw() {
    background(9, 10);

    translate(400, 400);

    let a = 3;
    let b = 2;

    let x = 150 * sin(a * t + PI / 2);
    let y = 150 * sin(b * t);

    stroke(255);
    point(x, y);

    stroke(255, 50);
    line(0, 0, x, y);

    t += 0.02;
}