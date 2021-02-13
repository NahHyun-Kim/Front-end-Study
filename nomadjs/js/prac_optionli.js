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

  if (COUNTRY === null) {
    ask();
  }
}


  loadName();
