/* const body = document.body;

const MAX_COLOR = "max";
const MID_COLOR = "mid";
const MIN_COLOR = "half";

function handleColor() {
    //window.innerWidth 함수를 통해 가로 길이 측정
    
    
    console.log(window.innerWidth);
    if(window.innerWidth < 500) {
        //body.style.background-color: yellow;
        body.class = MIN_COLOR;
       
    } else if (window.innerWidth < 900 && window.innerWidth >= 500) {
        //body.style.background-color: purple;
        body.class = MID_COLOR;
    } else {
        //body.style.background-color: skyblue;
        body.class = MAX_COLOR;
    }
}


function init() {
    window.addEventListener("resize", handleColor);
    body.style.backgroundColor = "skyblue";
}

init(); */

const body = document.querySelector('body');

/* const MAX_COLOR = "max";
const MID_COLOR = "mid";
const MIN_COLOR = "half"; */

function handleColor() {
  //window.innerWidth 함수를 통해 가로 길이 측정

  console.log(window.innerWidth);
  if (window.innerWidth < 500) {
    //body.style.background-color: yellow;
    //body.class = MIN_COLOR;
    body.style.backgroundColor = "skyblue";
  } else if (window.innerWidth < 900 && window.innerWidth >= 500) {
    //body.style.background-color: purple;
    //body.class = MID_COLOR;
    body.style.backgroundColor = "purple";
  } else {
    //body.style.background-color: skyblue;
    //body.class = MAX_COLOR;
    body.style.backgroundColor = "yellow";
  }
}

function init() {
  window.addEventListener("resize", handleColor);
  body.style.backgroundColor = "skyblue";
}

init();