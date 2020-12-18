import { getLocation } from './utilities.js';
import Teams from './Teams.js';
import TeamsView from './TeamsView.js';

// Quake controller
export default class TeamsController {
  constructor(parent, league) {
    this.parent = parent;
    // sometimes the DOM won't exist/be ready when the Class gets instantiated, so we will set this later in the init()
    this.parentElement = null;
    
    this.league = league ,

    this.teams = new Teams();
    this.teamsView = new TeamsView();
  }
  async init() {

    // use this as a place to grab the element identified by this.parent, and get the teams of the year selected
    this.parentElement = document.querySelector(this.parent);
    this.getTeamsByLeague();
  }


  async getTeamsByLeague() {
    // this method provides the glue between the model and view. Notice it first goes out and requests the appropriate data from the model, then it passes it to the view to be rendered.
    //set loading message
    this.parentElement.innerHTML = '<li>Loading...</li>';
    // get the list of quakes in the specified radius of the location
    const teamList = await this.teams.getAllteamsByLeague(
      this.league,   
    );
    console.log(teamList);
    // render the list to html
    this.teamsView.renderTeamList(teamList, this.parentElement);
    console.log(this.parentElement);
    
    // add a listener to the new list of quakes to allow drill down in to the details
    const childrenArray = Array.from(this.parentElement.children);
    console.log(childrenArray);
    childrenArray.forEach(child => {
      child.addEventListener('click', e => {

        this.getTeamDetails(e.currentTarget.dataset.id);
      });
    }); 

  }


  async getTeamDetails(teamId) {
    // get the details for the teamId provided from the model, then send them to the view to be displayed
    const team = await this.teams.getTeamById(teamId);
    this.teamsView.renderTeam(team, this.parentElement);
    const btn = document.querySelector(`.btn[data-id="${teamId}"]`);

    btn.addEventListener('click', e => {
      let player = document.getElementsByClassName('title'); 
      player[0].textContent = "";
      this.getTeamsByLeague();
    });
  }

 

}