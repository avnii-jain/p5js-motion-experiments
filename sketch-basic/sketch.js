function setup(){
    createCanvas(500, 500);
    angleMode(DEGREES);
}

function draw(){
    background(50);

    let x = 250 + 100 * sin(frameCount * 0.5);
    let y = 250 + 100 * cos(frameCount * 0.5);

    fill(250, 200, 225);
    noStroke();
    circle(x, y, 40);
}