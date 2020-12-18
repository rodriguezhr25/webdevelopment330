import WeatherController from './WeatherController.js';


//document.querySelector("#searchBtn").onsubmit  = newSearch;
document.getElementById("weatherForm").addEventListener("submit", function(event) {
    event.target.checkValidity();
    event.preventDefault(); // Prevent form submission and contact with server
    event.stopPropagation();
    newSearch();
  }, false);

function newSearch(){
 

const city = document.getElementById('city').value;
console.log(city);
const controller = new WeatherController('#weatherList', city);

    controller.init();

}







