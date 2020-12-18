const links = [
  {
    label: "Notes",
    url: "readings/index.html"
  },
    {
      label: "Tic Tac Toe ",
      url: "tictoc/tictactoe.html"
    },
    {
      label: "Star Wars Characters",
      url: "week8team/index.html"
    },
    {
      label: "Todo Application",
      url: "todo/index.html"
    },
    {
      label: "Quakes Near Me",
      url: "QuakesNearMe/index.html"
    },
    {
      label: "Drums",
      url: "Drums/index.html"
    },
    {
      label: "Weather App",
      url: "weatherApp/index.html"
    },
  ]

  function generateMenu(){

    let parent = document.getElementById("parent");
    
    for( let i= 0 ; i < links.length ; i++){
       
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.setAttribute('href',links[i].url);
        a.innerHTML = links[i].label;
        li.appendChild(a);
        parent.appendChild(li);
    }
  }