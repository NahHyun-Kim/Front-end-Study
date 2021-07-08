const canvas = document.getElementById("jsCanvas");
// context 사용(canvas 안에서 픽셀 단위로 다룰 수 있음)
const ctx = canvas.getContext("2d");
// 색상 변화, 선 굵기 변화
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

// canvas pixel modifier에 사이즈를 지정해줌
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

// 배경색이 없는 상태로 저장을 할 경우, 기본 배경색이 transparent(투명)으로 저장되므로, 기본값 초기화
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

// fillColor, strokeStyle, path(기본적인 선).. 등 사용 가능
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

// fillRect(사각형 채우기, x좌표, y좌표, 가로크기, 세로크기), fillStyle로 색상 지정
// ctx.fillRect(50, 20, 100, 49);

// 기본값은 페인트를 하지 않기 때문에 false
let painting = false;
// filling mode(전체 채우기 : fillRect()로 width, height에 의해 결정된 사이즈로 (x,y) 위치에 색칠한 사각형을 그림)
let filling = false;


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
    // console.log("creating path in", x, y); // -> 마우스를 움직이는 모든 시점에 path 값을 가져옴
    ctx.beginPath();
    ctx.moveTo(x, y); // moveTo() : 현재의 sub-path를 현재의 stroke-style로 만든 다음, 선을 그음
  } // 클릭 시 path 생성을 멈추고, 시점부터 line을 그림
  else {
    // 시작점에서 직선으로 연결을 시작(lineTo() : 전 위치에서 지금 위치까지 선 만듬)
    // console.log("creating line in", x, y);// -> 마우스의 전 위치와 연결
    ctx.lineTo(x, y);
    ctx.stroke();
    // closePath() : 시작점 path가 오로지 하나, 한 시작점에서 다른 위치에 선이 그려짐
  }
}


// 마우스를 클릭하는 시점부터 페인트 시작(painting값을 true로 변경)
function onMouseDown(event) {
  painting = true;
}

// 색상을 클릭했을 때, 클릭한 색상으로 선의 색상을 바꾸도록 처리
function handleColorClick(event) {
  // console.log(event.target.style);
  const color = event.target.style.backgroundColor;
  console.log(color);

  // 기존 black으로 설정된 색상값을 override
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

// input range의 선 굵기 변화 처리(value값을 받아와 변경)
function handleRangeChange(event) {
  console.log(event.target.value);
  
  // 기존값으로 설정되어 있던 선의 굵기를 override
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleCM(event) {
  console.log(event);
  event.preventDefault(); // 기본 이벤트 발생을 방지
}

// line or paint 모드 변경 처리
function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";

  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

/*
 이미지 저장하기 1) canvas의 데이터를 image처럼 얻기
*/
function handleSaveClick() {
  // HTMLCanvasElement.doDataURL() -> type parameter에 의해 지정된 포맷의 이미지 표현을 포함한 data URI 반환
  const image = canvas.toDataURL("image/png");
  console.log(image);
  const link = document.createElement("a"); // 가상의 링크를 생성하여, a태그의 download 속성을 이용하여 이미지 다운로드 진행
  link.href = image; // href : image(URL)
  link.download = "paintJS[EXPORT]"; // download : 이름
  link.click();
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
  // canvas를 클릭 했을때 fill 모드면 전체 화면을 색상으로 채우도록 이벤트 처리
  canvas.addEventListener("click", handleCanvasClick);
  // contextmenu(우클릭 시 기본으로 save images와 같은 기능을 제공)를 핸들링하고 싶을 때
  canvas.addEventListener("contextmenu", handleCM);

}


// array.from으로 object로부터 array로 만들어 반환, forEach로 array안의 color를 가짐
// console.log(Array.from(colors));
Array.from(colors).forEach(color =>
   color.addEventListener("click", handleColorClick)
   );

// range값의 변화에 따른 브러쉬 굵기 변화
if (range) {
  range.addEventListener("input", handleRangeChange)
}

// 선 그리기 모드인지, 전체 배경 채우기 모드인지(filling) 모드를 변경
if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}