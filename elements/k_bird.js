let x = [];
let fourierX;
let time = 0;
let path = [];

function setup() {
    createCanvas(800, 400);
    background(9);

    for (let i = 0; i < 200; i++) {

        let angle = map(i, 0, 200, 0, TWO_PI);

        // r(.) is the parametrized position of the bird
        let r = 100 + 50 * cos(angle)
        let xx = r * sin(angle);
        let yy = r * cos(angle);
        xx += 10 * noise(i)
        yy += 10 * noise(i);

        x.push({ re: xx, im: yy });
    }

    fourierX = dft(x);

    fourierX.sort((a, b) => b.amp - a.amp);
}

function draw() {
    background(9, 80);

    // Center the drawing
    let v = epicycles(width / 2, height / 2, 0, fourierX);

    path.unshift(v);

    beginShape();
    noFill();
    stroke(255, 255, 255);
    for (let i = 0; i < path.length; i++) {
        vertex(path[i].x, path[i].y);
    }
    endShape();

    if (path.length > x.length) {
        path.pop();
    }
    const dt = TWO_PI / fourierX.length;
    time += dt;
}

function epicycles(x, y, rotation, fourier) {
    for (let i = 0; i < fourier.length; i++) {
        let prevx = x;
        let prevy = y;

        let freq = fourier[i].freq;
        let radius = fourier[i].amp;
        let phase = fourier[i].phase;
        let angle = freq * time + phase + rotation;
        x += radius * cos(angle);
        y += radius * sin(angle);

        if (radius > 2) {
            stroke(255, 70);
            strokeWeight(1);
            noFill();
            ellipse(prevx, prevy, radius * 2);

            stroke(255, 50);
            line(prevx, prevy, x, y);
        }
    }

    return createVector(x, y);
}

function dft(x) {
    const X = [];
    const N = x.length;

    for (let k = 0; k < N; k++) {
        let re = 0;
        let im = 0;

        for (let n = 0; n < N; n++) {
            const phi = (TWO_PI * k * n) / N;

            re += x[n].re * cos(phi) + x[n].im * sin(phi);
            im += x[n].im * cos(phi) - x[n].re * sin(phi);
        }

        re = re / N;
        im = im / N;

        let freq = k;
        let amp = sqrt(re * re + im * im);
        let phase = atan2(im, re);

        X[k] = { re, im, freq, amp, phase };
    }

    return X;
}