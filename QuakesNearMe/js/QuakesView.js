// Quake View handler
export default class QuakesView {
    renderQuakeList(quakeList, listElement) {
        //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">


        if (quakeList.features.length > 0) {
            listElement.innerHTML = "";
        

        quakeList.features.forEach(element => {
            let time = new Date(element.properties.time);
            let title = element.properties.title;

            let li = document.createElement('li');
            li.setAttribute('data-id', element.id)
            li.innerHTML = `<p> <span>Title</span>: ${title} - <span>Time</span>:${time} </p>`;
            console.log(li);
            listElement.appendChild(li);
        
            

        });

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
    renderQuake(quake, element) {
        const quakeProperties = Object.entries(quake.properties);
        // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
        const backButton = document.createElement('button');
        backButton.innerHTML = 'Hide details';
        const parentLi = document.querySelector(`[data-id="${quake.id}"]`);
     

        backButton.setAttribute('class' , 'btn');
        backButton.setAttribute('data-id' , quake.id);

        let ul = document.createElement('ul');

        quakeProperties.forEach(item => {
            let li = document.createElement('li');
            if (item[0] === 'time' || item[0] === 'updated') {
                li.innerHTML = `<p> ${item[0].toUpperCase()} : ${new Date(item[1])} </p>`;

            } else {
                li.innerHTML = `<p> ${item[0].toUpperCase()} : ${item[1]} </p>`;

            }

            ul.appendChild(li);

        })

        parentLi.appendChild(ul);
        parentLi.insertBefore(backButton, parentLi.childNodes[0]);
       // parentLi.appendChild(backButton);
        element.innerHTML = parentLi.innerHTML
    //return backButton;


    }
}
