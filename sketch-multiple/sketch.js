function setup(){
    createCanvas(500, 500);
}

function draw(){
    background(50);

    fill(220, 170, 255);
    noStroke();

    for(let i = 0; i < 5; i++){
        let radius = 50 + i * 10;

        let x = 250 + radius * sin(frameCount);
        let y = 250 + radius * cos(frameCount);

        circle(x, y, 100);
    }
}