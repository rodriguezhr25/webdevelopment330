const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week2 notes",
      url: "week2/index.html"
    },
        {
      label: "Week3 notes",
      url: "week3/index.html"
    },
    {
      label: "Week4 notes",
      url: "week4/index.html"
    },
    {
      label: "Week5 notes",
      url: "week5/index.html"
    },

    {
      label: "Todo Application",
      url: "todo/index.html"
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