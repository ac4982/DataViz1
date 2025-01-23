// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    background(225);
    let secX = map(sec, 0, 59, 0, width - 100);
    let minX = map(min, 0, 59, 0, width - 100);
    let hrX = map(hr, 0, 23, 0, width - 100);
    let secShade = map(sec, 0, 59, 255, 100);
    let minShade = map(min, 0, 59, 255, 100);
    let hrShade = map(hr, 0, 23, 255, 100);

    fill(200, 100, 0, secShade);
    rect(secX, 5, 100, 100);

    fill(200, 100, 0, minShade);
    rect(minX, 110, 100, 100);

    fill(200, 100, 0, hrShade);
    rect(hrX, 500, 100, 100);

}
