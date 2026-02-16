function setup() {
    createCanvas(800, 800);
    background(9);
    stroke(255);
    noFill();
}

let t = 0;

function draw() {
    background(9, 20);
    translate(400, 400);
    let k = t;

    for (let theta = 0; theta < TWO_PI * 10; theta += 0.02) {

        let r = 150 * cos(k * theta);

        let x = r * cos(theta);
        let y = r * sin(theta);

        point(x, y);
    }

    t += 0.003;
}