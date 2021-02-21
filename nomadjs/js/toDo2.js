const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = 'toDos';

const toDos = [];

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