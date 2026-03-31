new p5((p) => {
  p.setup = () => {
    p.createCanvas(500, 500).parent('basic-sketch');
    p.angleMode(p.DEGREES);
  };

  p.draw = () => {
    p.background(50);

    let x = 250 + 100 * Math.sin(p.frameCount * 0.5);
    let y = 250 + 100 * Math.cos(p.frameCount * 0.5);

    p.fill(250, 200, 225);
    p.noStroke();
    p.circle(x, y, 40);
  };
});