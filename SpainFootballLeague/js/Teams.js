import { getJSON } from './utilities.js';
// Quake Model
export default class Teams {
  constructor() {
    this.baseUrl = 'http://api.football-data.org/v2/competitions/'
  
    this._teams = [];
  }
  async getAllteamsByLeague(league) {
    // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._teams, then return it
   /*  const latitude = `&latitude=${position.lat}`;
    const longitude = `&longitude=${position.lon}`; 
    const radiusP = `&maxradiuskm=${radius}`;
    const start = `&starttime=${startDate}`;
    const end = `&endtime=${endDate}`; */
    const leagueSelected = league + "/teams";
    const query = this.baseUrl + leagueSelected;
    

    this._teams = await getJSON(query);
    console.log(this._teams);
    return this._teams;
  }
  getQuakeById(id) {
    // filter this._teams for the record identified by id and return it
    return this._teams.features.filter(item => item.id === id)[0];
  }
}