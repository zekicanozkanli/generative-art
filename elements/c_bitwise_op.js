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

    for (let i = 0; i < TWO_PI; i += 0.01) {

        let m = 1; n = 7;

        let r = 100 + 100 * sin(t | m + (7 * i) ^ n); // try the other bitwise operators: &, |, ^, <<, >>, >>>

        let x = r * cos(i);
        let y = r * sin(i);

        point(x, y);
    }

}