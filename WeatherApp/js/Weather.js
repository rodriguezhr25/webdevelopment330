import { getJSON } from './utilities.js';
// Quake Model
export default class Weather {
  constructor() {
    this.baseUrl ='https://api.openweathermap.org/data/2.5/weather?';
    this.baesUrlForecast = "https://api.openweathermap.org/data/2.5/forecast?";
    this.appiId = '&appid=bc07e7e42f613427f563eb21cda2609d'
    // this is where we will store the wetaher predictions
    this.weather = [];
    this.weatherForecast = [];
  }
  async getWeatherConditionByCity(position, city = "") {
    // use the getJSON function and the position provided to build out the correct URL to get the data we need, only if city is empty.  Store it into this.weather, then return it
    
    const latitude = `&lat=${position.lat}`;
    const longitude = `&lon=${position.lon}&units=metric`; 
    let query = this.baseUrl + latitude + longitude +  this.appiId;
    let queryForecast = this.baesUrlForecast + latitude + longitude +  this.appiId;

    if(city != ""){
      const citySearch = `&q=${city}&units=metric`;  
     query = this.baseUrl + citySearch + this.appiId;
     queryForecast = this.baesUrlForecast + citySearch + this.appiId;
    }
    
    

    this.weather = await getJSON(query);
    this.weatherForecast = await getJSON(queryForecast);
   
    return this.weather;
  }
  getQuakeById(id) {
    // filter this.weather for the record identified by id and return it
    return this.weather.features.filter(item => item.id === id)[0];
  }
}