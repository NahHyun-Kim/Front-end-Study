/* function sayHi() {
    console.log("say Hi");
}

//시간 간격마다 지정된 함수를 실행하는 setInterval 함수
//뒤의 시간은 3000=milli second이기 때문에 3초이다.
setInterval(sayHi, 3000); */

//clock 클래스의 자식을 탐색(querySelector : element의 자식)
//const 여러개 선언 시, 컴마(,)로 const를 두번 쓰지 않고 간결하게 표기 가능
const clockContainer = document.querySelector('.js-clock'),
      clockTitle = clockContainer.querySelector("h1");

function getTime() {
    //Date(class, object(객체))
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    //innerText 객체 안의 텍스트 넣음 (`` 사용)
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;


}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init(); 
