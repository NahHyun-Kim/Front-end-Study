const ddayContainer = document.querySelector('.js-dday'),
    dday = ddayContainer.querySelector('h1');

const eve = new Date("December 24, 2021, 00:00:00").getTime();

function getTime(){
    const today = new Date().getTime();
    const counter = eve - today;
    //math.ceil()함수(주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer로 변환)
    const day = Math.ceil(counter / (1000 * 60 * 60 * 24));
    const hour = Math.ceil((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))-1;
    const min = Math.ceil((counter % (1000 * 60 * 60 * 24)) / (1000 * 60))-1;
    const sec = Math.ceil((counter % (1000 * 60)) / 1000);
    dday.innerHTML = `${day < 10 ? `0${day}` : day}d 
    ${hour < 10 ? `0${hour}` : hour}h 
    ${min < 10 ? `0${min}` : min}m 
    ${sec < 10 ? `0${sec}` : sec}s
    `
};

function init() {
    setInterval(getTime, 1000);
}

init();