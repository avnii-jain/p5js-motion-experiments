let multipleSketch = function(p) {
  p.setup = function() {
    p.createCanvas(500, 500);
  };

  p.draw = function() {
    p.background(50);
    p.fill(220, 170, 255);
    p.noStroke();

    for (let i = 0; i < 5; i++) {
      let radius = 50 + i * 10;

      let x = 250 + radius * Math.sin(p.frameCount);
      let y = 250 + radius * Math.cos(p.frameCount);

      p.circle(x, y, 100);
    }
  };
};

new p5(multipleSketch, 'multiple-sketch');