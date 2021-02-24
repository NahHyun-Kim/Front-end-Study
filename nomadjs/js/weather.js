const weather = document.querySelector(".js-weather");

//openweathermap에서 받아온 api키 
const API_KEY = "b5485b7c2f0b6987ddfccdfc93005600";
const COORDS = "coords";

function getWeather(lat, lng){
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
      //자바스크립트에서 then을 사용함(뭔가가 끝나기를 기다림)
      return response.json()
    }).then(function(json){
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    })
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    //이름이 같을 경우는 latitude: latitude로 작성하지 않음
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(){
  console.log("Can't access geolocation");
}

function askForCoords(){
  //navigator api를 이용하여 위치정보 가져오기
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askForCoords();

  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }

}

function init(){
  loadCoords();
}

init();