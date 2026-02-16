function setup() {
    createCanvas(800, 800);
    background(9);
    stroke(250, 250);
}

let t = 0;

function draw() {
    background(9, 10);
    let a = 1.5 + sin(t) * 0.5;
    let b = 1.5 + cos(t * 0.7) * 0.5;
    let c = 1.2 + sin(t * 1.2) * 0.3;
    let d = 1.2 + cos(t * 1.5) * 0.3;

    let x = 0;
    let y = 0;

    for (let i = 0; i < 1000; i++) {

        let x_new = sin(a * y) + c * cos(a * x);
        let y_new = sin(b * x) + d * cos(b * y);

        x = x_new;
        y = y_new;

        point(x * 80 + 400, y * 80 + 400);
    }

    t += 0.005;
}