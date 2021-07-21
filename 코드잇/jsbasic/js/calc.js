var formulaInput = document.getElementById("formula-input");
var calHistDiv = document.getElementById("calc-history");

formulaInput.addEventListener("keyup", function(e) {
  // 키보드가 enter를 누를 때, 계산 진행
  if (e.code === "Enter")
    calculate();
})

function calculate() {

  // 입력 칸의 문자열이 사칙연산 형식에 맞는지 확인
  var fm = formulaInput.value; // 입력한 value값 가져오기
  var formulaRegex = /^\d+(.\d+)?[+\-*/]{1}\d+(.\d+)?$/;
  // ** 정규식.test() : 정규 표현식을 만족하는지 체크 후, true/false로 반환
  var formulaValid = formulaRegex.test(fm); 
  var resultText = "오류!";
  if (formulaValid) {
    // 형식에 맞다면, 계싼 진행
    var answer;
    eval('answer=' + fm);
    resultText = fm + " = ";
    resultText
    += (answer % 1 > 0 ? answer.toFixed(2) : answer.toString());
  }

  // calc-history 상자에 넣을 또 다른 상자를 생성하고 내용을 설정한 뒤 삽입
  var resultDiv = document.createElement("div");
  // ** Document.createTextNode() : 텍스트 노드 생성
  resultDiv.appendChild(document.createTextNode(resultText));
  if (!formulaValid) 
    // 유효성에 충족되지 않을시, invalid라는 클래스명을 생성하여 css로 강조하여 오류임을 나타냄
    resultDiv.classList.add("invalid");
    // ** insertBefore(newItem, existingItem) : 기존 자식 노드 앞에 새 자식 노드 삽입(필요인자 2개)
  calcHistDiv.insertBefore(resultDiv, calcHistDiv, firstChild);

  // 입력칸은 빈 칸으로
  formulaInput.value = "";
}