const select = document.querySelector('select');
const option = select.querySelector('option');
const country = "country";

function handleSelect() {
  const currentCountry = select.value;
  localStorage.setItem("country", currentCountry);

}

function ask() {
  select.addEventListener("change", handleSelect);
}

function loadName() {
  const COUNTRY = localStorage.getItem(country);

  //챌린지 (나라명 입력받아 local storage 에 띄우기)
  if (COUNTRY === null) {
    ask();
  }
}

  loadName();
