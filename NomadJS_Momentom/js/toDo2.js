const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = 'toDos';

//forEach에서 function을 실행하는것 같이 각각의 item과 같이 실행
//filter는 array의 모든 아이템을 통해 함수를 실행, true인 아이템들로만 새로운 array를 만듬

function filterFn(toDo){
  return toDo.id === 1
}

let toDos = [];

function deleteToDo(event){
  //console.log대신 dir 와, .target. button의 부모인 parentNode를 입력하여 li# 아이디번호를 알아낼 수 있다.
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  //위에까지만 진행하면 새로고침 시 삭제된 목록이 다시 뜸.
  const cleanToDos = toDos.filter(function(toDo){
    //모든 toDo.id가 li.id와 같지 않을때
    return toDo.id !== parseInt(li.id);
  });
  //cleanToDos를 교체
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  //localStorage는 기본으로 String 형태로 저장 : ex) true를 value 값에 넣고 저장하면 boolean 값이 아닌,
  //"true" 처럼 String 형태로 저장됨. 이에 따라 JSON.stringify() 를 해줌
  //JavaScript Object to String(JSON.stringify)
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  //리스트를 만들어서 추가해줌
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  
  toDoList.appendChild(li);


  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

//toDos를 가져온뒤, parse 해줌 > 각각에 대해 paintToDo라는 function 실행
function something (toDo) {
  paintToDo(toDo.text);
}

function loadToDos() {
  const loadtoDos = localStorage.getItem(TODOS_LS);
  if(loadtoDos !== null) {
    
    //JSON(JavaScript Object Notation) - 데이터를 전달할 때, 자바스크립트가 다룰 수 있도록 object로 바꿔주는 기능
    //object to String , String to Object
    const parsedToDos = JSON.parse(loadtoDos);
    
    //array가 가진 forEach : 기본적으로 함수실행,
    //array에 담겨있는 것들을 각각에 한번씩 함수 실행
    parsedToDos.forEach(something);
    //toDos에 있는 각각에 대해서 function을 실행
    
  }
}
  
  function init(){

    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
  }

  init();