// Quake View handler
export default class WeatherView {
  renderWeatherList(weatherList, weatherForecast, listElement) {
        //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    console.log(weatherList);
        if (weatherList.weather.length > 0) {
            listElement.innerHTML = "";
            let mainContainer  = document.querySelector('div.conditions');
            let predictions = Array.prototype.slice.call(document.getElementsByClassName("conditions"), 0);
            var results = document.getElementsByClassName('results');
            var forecastElement = document.getElementsByClassName('forecast');
            while(results[0]) {
              results[0].parentNode.removeChild(results[0]);
            };
            while(forecastElement[0]) {
                forecastElement[0].parentNode.removeChild(forecastElement[0]);
              };
            let weatherConditions = weatherList.weather[0];
            let weatherDetails = weatherList.main;
            let temp = weatherDetails.temp;
            let maxTemp = weatherDetails.temp_max;
            let minTemp = weatherDetails.temp_min;
            let pressure = weatherDetails.pressure;
            let humidity = weatherDetails.humidity;         

            let col = document.createElement('div');
            col.setAttribute("class", "results");
            let h2 = document.createElement('h2');
            h2.setAttribute("class", "title");
            let data = document.createElement('h3');
            data.setAttribute("class", "data");
            let img = document.createElement('img');
            img.setAttribute('src', 'https://openweathermap.org/img/w/' + weatherConditions.icon + '.png');
            img.setAttribute('alt', weatherConditions.description);
            img.setAttribute("class", "center");
            let conditions = document.createElement('span');
            conditions.textContent = weatherConditions.main;
            conditions.setAttribute("class", "condition");
            h2.textContent = weatherList.name;
            data.textContent = temp + "°C";
            let details = document.createElement('div');
            details.setAttribute("class", "main-details");
            let min = document.createElement('span');
            let max = document.createElement('span');
            let pre = document.createElement('span');
            let hum = document.createElement('span');
            min.setAttribute("class", "details");
            max.setAttribute("class", "details");
            pre.setAttribute("class", "details");
            hum.setAttribute("class", "details");
            min.textContent = `Min:${minTemp} °C `;
            max.textContent = `Max:${maxTemp} °C `;
            pre.textContent = `Pressure:${pressure}hPA `;
            hum.textContent = `Humidity:${humidity}% `;
            details.appendChild(min);
            details.appendChild(max);
            details.appendChild(pre);
            details.appendChild(hum);

            col.appendChild(h2);
            col.appendChild(data);
            col.appendChild(img);
            col.appendChild(conditions);
            col.appendChild(details);
         
            document.querySelector('div.conditions').appendChild(col);
            
            var today = new Date();
            const forecast = weatherForecast['list'];
            var count = 0;
            let divForecast = document.createElement('div');
            divForecast.setAttribute("class", "forecast");
            for (let i = 0; i < forecast.length; i++) {
                var hour = new Date(forecast[i].dt_txt).getHours();
                var day = new Date(forecast[i].dt_txt).getDay();
                if (hour == 18) {
                    let column = document.createElement('div');
                    column.setAttribute("class", "column");
                    let span = document.createElement('span');
                    span.setAttribute("class", "label");
                    let infoW = document.createElement('span');
                    infoW.setAttribute("class", "infoW");
                    let imgF = document.createElement('img');
                    imgF.setAttribute('src', 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png');
                    imgF.setAttribute('alt', forecast[i].weather[0].description);
    
    
                    span.textContent = days[day];
                    infoW.textContent = forecast[i].main.temp.toFixed(0) + "°C";
                    column.appendChild(span);
                    column.appendChild(imgF);
                    column.appendChild(infoW);
                    divForecast.appendChild(column);
                }
            }
            document.querySelector('div.conditions').appendChild(divForecast);
           
      }else{
        listElement.innerHTML = "No records found , try with new dates and radius";
      }
     
    }
    
}
