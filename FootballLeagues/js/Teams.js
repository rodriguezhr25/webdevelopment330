import { getJSON } from './utilities.js';
// Quake Model
export default class Teams {
  constructor() {
    this.baseUrl = 'https://api.football-data.org/v4/competitions/'
    this.baseUrlTeam = 'https://api.football-data.org/v4/teams/'
    this._teams = [];
    this._teamDetails = [];
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
  async getTeamById(id) {
    // filter this._teams for the record identified by id and return it
    const teamId = id;
    const query = this.baseUrlTeam + teamId;
    

    this._teamDetails = await getJSON(query);
    console.log(this._teamDetails);
    return this._teamDetails;
  }
}
