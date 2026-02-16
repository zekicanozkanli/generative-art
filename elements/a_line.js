function setup() {
    createCanvas(800, 800);
    background(9);
    stroke(255);
    strokeWeight(2);
    noFill();
}

function draw() {
    background(9);

    for (let i = 0; i < 10000; i++) {

        let x = i; y = i;
        point(x, y);
    }

}