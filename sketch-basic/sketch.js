let basicSketch = function(p) {
  p.setup = function() {
    p.createCanvas(500, 500);
    p.angleMode(p.DEGREES);
  };

  p.draw = function() {
    p.background(50);

    let x = 250 + 100 * Math.sin(p.frameCount * 0.5);
    let y = 250 + 100 * Math.cos(p.frameCount * 0.5);

    p.fill(250, 200, 225);
    p.noStroke();
    p.circle(x, y, 40);
  };
};

new p5(basicSketch, 'basic-sketch');