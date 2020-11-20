import QuakesController from './QuakesController.js';


//document.querySelector("#searchBtn").onsubmit  = newSearch;
document.getElementById("quakeForm").addEventListener("submit", function(event) {
    event.target.checkValidity();
    event.preventDefault(); // Prevent form submission and contact with server
    event.stopPropagation();
    newSearch();
  }, false);

function newSearch(){
 
const starDate = document.getElementById('startDate').value;
const endDate = document.getElementById('endDate').value;
const maxRadius = document.getElementById('maxRadius').value;
console.log(endDate);
console.log(starDate);
const controller = new QuakesController('#quakeList', starDate, endDate, maxRadius);

    controller.init();

}







