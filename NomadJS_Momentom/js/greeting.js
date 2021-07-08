//querySelector(찾은 첫번째 것을 가져옴), All(Array)
//getElementbyId, tagname(태그로 엘리먼트 가져옴)
const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    //event는 기본적으로 페이지를 새로고침해주는데, 이를 방지(enter를 눌러도 값이 사라지지 않음)
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}   

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {

    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else {
        //she is
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();