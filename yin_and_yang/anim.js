function setup() {
    createCanvas(800, 400);

    background(9);
    stroke(200, 100);

    /*saveGif("yin_and_yang.gif", 12, {
        units: "seconds",
        delay: 0,
        render: true,
        quality: "high"
    });*/

}

let t = 0;

function draw() {
    background("#0d1117");

    t += PI / 180;

    /* number of points */
    for (let i = 10000; i > 0; i--) {

        let j = i / 1000;

        let e = j / 13 - 13;

        /* xor discretizes the tail, unlike the continuity of head */
        let s = (j < 8) ? (8 + sin(Math.floor(j) ^ 9) * 6) : (3 + tan(j));

        /* removing cos(.) removes the point cloud */
        let k = s * cos(i + t / 4);

        let d = mag(k, e) + cos(e + t * 2 + (i % 2) * 4);

        let r = y * k / 5 * (2 + sin(d * 2 + y - t * 4)) + 80;

        let theta = d / 4 - t / 2 + (i % 2) * 3;
        point(r * cos(theta) + 400, r * sin(theta) + 200);
    }
}

