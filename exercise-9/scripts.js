// p5.js 시작 진입 점 canvas 그리기 (그리기 영역)
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
  drawLeaf(centerX, centerY + 150, 45);
  fill("#DB3A38");
  drawLeaf(centerX, centerY + 150, 135);
}

// 파라미터를 받아 꽃잎 그리기
// 위치 선택 후 각도를 조절하여 타원형을 그립니다.
function drawPetal(centerX, centerY, x, y, rotation) {
  push();
  translate(centerX + x, centerY + y);
  rotate(radians(rotation));
  ellipse(0, 0, 48, 64);
  pop();
}

// 파라미터를 받아 잎사귀(꽃잎 받침을) 그리기
// 위치 선택 후 각도를 조절하여 타원형 모양을 직접 선을 연결하여 그립니다.
function drawLeaf(centerX, centerY, rotation) {
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
