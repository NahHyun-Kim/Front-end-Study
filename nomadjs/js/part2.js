//const title = document.getElementById("title");
//document로 가서 찾고, 노드의 첫번째 자식 반환(ex) id=title : #id)
const title = document.querySelector('#title');
console.log(title);
console.error("myError");

//object have many keys(.log .error)


//HTML to DOM 객체로 변환 가능
title.innerHTML = "Hi! JS";
title.style.color = "pink";

//document객체의 title <title>태그의 내용 바꿈
document.title = "I Own you now";

//event? 자바스크립트로부터 옴. 이벤트 다룰 함수를 만들떄마다
//자동적으로 함수를 객체에 붙임.
function handleResize(event) {
    console.log(event);
   
}

//window resize는 handleResize를 호출한다.
//handleResize()로 사용하면 resize를 하지 않아도 자동 호출 되므로, 그냥 쓸것
//그러면 resize 될때만 I have been Resized가 뜬다.
window.addEventListener("resize", handleResize)

function handleClick(event) {
    //클릭할때마다 색깔을 파란색으로 변경
    title.style.color = "blue";
}

//title은 click을 기다리고 있다(event)
title.addEventListener("click", handleClick);
