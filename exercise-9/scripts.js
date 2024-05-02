function setup() {
  createCanvas(400, 400);
  drawFlower();
}

function drawFlower() {
  // 꽃 중심 위치 설정
  let centerX = width / 2;
  let centerY = height / 2;

  // 꽃잎 그리기
  fill("#FECC2F");
  drawPetal(centerX, centerY, -24, -16, -60);
  fill("#F66127");
  drawPetal(centerX, centerY, 0, -32, 0);
  fill("#DB3A38");
  drawPetal(centerX, centerY, 24, -16, 60);
  fill("#A365D9");
  drawPetal(centerX, centerY, 24, 16, 120);
  fill("#40A4D8");
  drawPetal(centerX, centerY, 0, 32, 180);
  fill("#AEC325");
  drawPetal(centerX, centerY, -24, 16, -120);

  // 꽃 중심 그리기
  fill("#ffffff");
  ellipse(centerX, centerY, 32, 32);

  // 잎 그리기
  fill("#AEC325");
  drawLeaf(centerX, centerY + 150, 80, 160, 45);
  fill("#DB3A38");
  drawLeaf(centerX, centerY + 150, 80, 160, 135);
}

function drawPetal(centerX, centerY, x, y, rotation) {
  push();
  translate(centerX + x, centerY + y);
  rotate(radians(rotation));
  ellipse(0, 0, 48, 64);
  pop();
}

function drawLeaf(centerX, centerY, width, height, rotation) {
  push();
  translate(centerX, centerY);
  rotate(radians(rotation));
  beginShape();
  vertex(-10, 0);
  bezierVertex(-30, -30, -80, -30, -100, 0);
  bezierVertex(-80, 30, -30, 30, -10, 0);
  endShape(CLOSE);
  pop();
}
