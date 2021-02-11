//만약 if문으로 10 과 5를 같다고 표현하려면 10 === 5로 표현
//if조건은 항상 참이여야 한다(if에 있는 것을 실행하려면)
if(10 > 5) {
    console.log('hi');
} else if("10" === "10"){
    console.log("ho");
} else {
    console.log("ho");
}

const lalala = 'lalalala';
console.log(lalala);

//and(&&) or(||)
if(20>5 && "NH" === "NH") {
    console.log("yes");
} else{
    console.log("no");
}

// const age = prompt("How old are you?");

// if (age > 18 && age < 21) {
//     console.log("You can drink but you should not");
// } else if( age > 21) {
//     console.log("go ahead");
// }
//  else {
//     console.log("too young!");
// }


/* const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#e1b12c"; */

/* function handleClick() {
    const currentColor = title.style.color;
    if (currentColor == BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}



function init() {
    title.style.color = BASE_COLOR;
    
}

title.addEventListener("mouseenter", handleClick);
init(); */

// function handleOffLine() {
//     console.log("bye bye");
// }

// function handleOnline() {
//     console.log("Welcome back!!")
// }
// window.addEventListener("offline", handleOffLine)
// window.addEventListener("online", handleOnline)

const title = document.querySelector('#title');

const CLICKED_CLASS = "clicked";

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    
    //만약 hasClass가 CLICKED_CLASS를 가진 상태면 제거하고, 없다면 추가하여 css가 변경되도록 설정
    
    //프로그래머는 게을러! 이 코드는 너무 길어! (줄이고 싶을땐 toggle을 사용하자.)
    /* if (hasClass) {
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
    */

    //toggle은 요약하는 것(위의 코드처럼 있으면 class추가, 없으면 remove)
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}

init();
