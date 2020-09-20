const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
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