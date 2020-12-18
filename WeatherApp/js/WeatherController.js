import { getLocation } from './utilities.js';
import Weather from './Weather.js';
import WeatherView from './WeatherView.js';

// Quake controller
export default class WeatherController {
  constructor(parent,  city,position = null ){
    this.parent = parent;
    // sometimes the DOM won't exist/be ready when the Class gets instantiated, so we will set this later in the init()
    this.parentElement = null;
    // let's give ourselves the option of using a location other than the current location by passing it in.
    this.position = position || {
      lat: 0,
      lon: 0
    };
    //Receive the dates from the view or set default, and the radius
    
    this.city = city ;

    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.weather = new Weather();
    this.weatherView = new WeatherView();
  }
  async init() {

    // use this as a place to grab the element identified by this.parent, do the initial call of this.initPos(), and display some quakes by calling this.getQuakesByRadius()
    this.parentElement = document.querySelector(this.parent);
    await this.initPos();
    this.getWeatherByCity();
  }
  async initPos() {
    // if a position has not been set
    if (this.position.lat === 0) {
      try {
        // try to get the position using getLocation()
        const currentPosition = await getLocation();
        // if we get the location back then set the latitude and longitude into this.position
        this.position.lat = currentPosition.coords.latitude;
        this.position.lon = currentPosition.coords.longitude;
        console.log(currentPosition);
     
      } catch (error) {
        console.log(error);
      }
    }
  }

  async getWeatherByCity() {
    // this method provides the glue between the model and view. Notice it first goes out and requests the appropriate data from the model, then it passes it to the view to be rendered.
    //set loading message
    this.parentElement.innerHTML = '<li>Loading...</li>';
    // get the list of quakes in the specified radius of the location
    const weatherList = await this.weather.getWeatherConditionByCity(
      this.position,     
      this.city
    );
    
    // render the list to html
    this.weatherView.renderWeatherList(this.weather.weather, this.weather.weatherForecast, this.parentElement);
    console.log(this.parentElement);
    console.log(this);

  }




 

}