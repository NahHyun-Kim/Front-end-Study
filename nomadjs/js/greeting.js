//querySelector(찾은 첫번째 것을 가져옴), All(Array)
//getElementbyId, tagname(태그로 엘리먼트 가져옴)
const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {

    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //she is not
    }else {
        //she is
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();