// Quake View handler
export default class TeamsView {
  renderTeamList(teamList, cardDiv) {
        //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
        console.log(teamList);

        if (teamList.count > 0) {
          cardDiv.innerHTML = "";
            var results = document.getElementsByClassName('cards');
    
            while(results[0]) {
              results[0].parentNode.removeChild(results[0]);
            };
            
           
            cardDiv.setAttribute("class", "cards");
  
           
            const teams = teamList['teams'];
            for (let i = 0; i < teams.length; i++) {
                let card = document.createElement('div');
                card.setAttribute("class", "card");
                card.setAttribute("data-id", teams[i].id);
                let section = document.createElement('section');
       
                let h2 = document.createElement('h2');
                h2.textContent = teams[i].name + ' (' + teams[i].shortName + ')';
                let founded = document.createElement('p');
                let clubColors = document.createElement('p');
                let venue = document.createElement('p');
               
                founded.textContent = "Founded: " + teams[i].founded;
                clubColors.textContent = "Club Colors: " + teams[i].clubColors;
                venue.textContent = "Location: " + teams[i].venue;
               
                let img = document.createElement('img');
                img.setAttribute('src', teams[i].crestUrl);
                img.setAttribute('alt', teams[i].name + ' ' + teams[i].shortName + '-' + [i]);
                img.setAttribute('class' ,'w-100');
                card.appendChild(img);
                section.appendChild(h2);
                section.appendChild(founded);
                section.appendChild(clubColors);
                section.appendChild(venue);
                card.appendChild(section);
                cardDiv.appendChild(card);
                document.querySelector('div.container').appendChild(cardDiv);
            }
           
            

      

      }else{
        listElement.innerHTML = "No records found , try with new dates and radius";
      }
        /*  quakeList.features.forEach(element => {
            const item = document.createElement('li');
          //  console.log(element);
            item.setAttribute('data-id', element.id);
            item.innerHTML = `${element.properties.title} 
            <p>${new Date(element.properties.time)}</p>`;
            listElement.appendChild(item);
          });
      
          listElement.innerHTML = quakeList.features
            .map(quake => {
              return `<li data-id=${quake.id}>${
                quake.properties.title
              } <div>${new Date(quake.properties.time)}</div></li>`;
            })
            .join('');
    
    */
    }
    renderTeam(team, element) {
      console.log(team);
      
       let cardDiv = document.createElement('div');
       cardDiv.setAttribute("class", "cards");
     
        const teamDetails = Object.entries(team.squad);
        // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
        const backButton = document.createElement('button');
        backButton.innerHTML = 'Hide details';
        const parentLi = document.querySelector(`[data-id="${team.id}"]`);


        backButton.setAttribute('class' , 'btn');
        backButton.setAttribute('data-id' , team.id);

        let ul = document.createElement('ul');

        teamDetails.forEach(item => {
          console.log(item);
        
              let card = document.createElement('div');
              card.setAttribute("class", "card");
             
              let section = document.createElement('section');
     
              let h2 = document.createElement('h2');
              h2.textContent = item[1].name;
              let nationality = document.createElement('p');
              let position = document.createElement('p');
              let dateOfBirth = document.createElement('p');
             
              nationality.textContent = "Nationality: " + item[1].nationality;
              position.textContent = "Position: " + item[1].position;
              dateOfBirth.textContent = "Date of Birth: " + new Date(item[1].dateOfBirth).toLocaleDateString();
             
             
              
              section.appendChild(h2);
              section.appendChild(nationality);
              section.appendChild(position);
              section.appendChild(dateOfBirth);
              card.appendChild(section);
              cardDiv.appendChild(card);
              document.querySelector('div.container2').appendChild(cardDiv);
          
        

        })

      

        parentLi.insertBefore(backButton, parentLi.childNodes[0]);
        console.log(parentLi);
        element.innerHTML = parentLi.innerHTML
    //return backButton;


    }
}
