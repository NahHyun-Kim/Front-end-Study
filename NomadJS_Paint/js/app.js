const canvas = document.getElementById("jsCanvas");
// context 사용(canvas 안에서 픽셀 단위로 다룰 수 있음)
const ctx = canvas.getContext("2d");

// canvas pixel modifier에 사이즈를 지정해줌
canvas.width = 700;
canvas.height = 700;

// fillColor, strokeStyle, path(기본적인 선).. 등 사용 가능
ctx.strokeStyle = "#2C2C2C";
ctx.lineWidth = 2.5;


// 기본값은 페인트를 하지 않기 때문에 false
let painting = false;


// 페인트를 멈추게 하는 stopPainting() 함수 정의
function stopPainting() {
  painting = false;
}

// 페인트를 시작하는 startPainting() 함수 정의
function startPainting() {
  painting = true;
}

// 마우스의 움직임을 감지하고, 라인을 만듬
function onMouseMove(event) {
  // canvas 위의 offset값을 x,y로 가져오기
  const x = event.offsetX;
  const y = event.offsetY;
  // console.log(x,y);
  // 클릭하지 않고 canvas 위에서 돌아다닐 때의 path 생성(선의 시작점), 마우스를 움직이는 모든 시점에 path를 만듬
  if (!painting) {
    // path(선)를 시작하고, offset의 x,y 좌표를 받아 그 위치로 이동
    // console.log("creating path in", x, y); -> 마우스를 움직이는 모든 시점에 path 값을 가져옴
    ctx.beginPath();
    ctx.moveTo(x, y); // moveTo() : 현재의 sub-path를 현재의 stroke-style로 만든 다음, 선을 그음
  } // 클릭 시 path 생성을 멈추고, 시점부터 line을 그림
  else {
    // 시작점에서 직선으로 연결을 시작(lineTo() : 전 위치에서 지금 위치까지 선 만듬)
    // console.log("creating line in", x, y); -> 마우스의 전 위치와 연결
    ctx.beginPath();
    ctx.lineTo(x, y);
    ctx.stroke();
    // closePath() : 시작점 path가 오로지 하나, 한 시작점에서 다른 위치에 선이 그려짐
  }
}

// 마우스를 클릭하는 시점부터 페인트 시작(painting값을 true로 변경)
function onMouseDown(event) {
  painting = true;
}


// canvas가 존재하는 경우(true)
// 캔버스 위에서의 마우스 움직임을 감지하는 함수
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  // canvas에서 마우스를 클릭할때 페인트 시작 -> startPainting();
  canvas.addEventListener("mousedown", startPainting);
  // canvas에서 마우스를 뗄 때 페인트 종료
  canvas.addEventListener("mouseup", stopPainting);
  // canvas 밖으로 마우스가 나가면 페인트가 되지 않도록 막음(painting 값을 false로 만드는 함수 호출)
  canvas.addEventListener("mouseleave", stopPainting);

}