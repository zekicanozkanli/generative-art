function setup() {
    createCanvas(800, 800);
    background(9);
    stroke(255);
    strokeWeight(2);
    noFill();
}

let t = 0;

function draw() {
    background(9);
    translate(400, 400);

    t += 0.02;

    for (let i = 0; i < 100; i += 0.01) {

        let m = 250

        let r = (t ** 2) * m * (100 % tan(noise(i)));

        let x = r * cos(i);
        let y = r * sin(i);

        point(x, y);
    }

}