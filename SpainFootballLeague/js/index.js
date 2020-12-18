import TeamsController from './TeamsController.js';


var select = document.getElementById("league");
var options = ["Primera Division","Brazil","England","France League 1","Bundesliga","Italy Serie A","Portuguese Primera Division"];
var values = ["PD","BSA","PL","FL1","BL1","SA","PPL"];
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var val = values[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = val;
    select.appendChild(el);
}

document.querySelector("#league").onchange  = newSearch;
document.getElementById("teamForm").addEventListener("submit", function(event) {
    event.target.checkValidity();
    event.preventDefault(); // Prevent form submission and contact with server
    event.stopPropagation();
    newSearch();
  }, false);

function newSearch(){
 

const league = document.getElementById('league').value;

const controller = new TeamsController('#teamList', league);

    controller.init();

}







