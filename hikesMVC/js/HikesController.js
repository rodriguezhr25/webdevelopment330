import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';
//  we also need the new comments class to add that functionality
import Comments from './CommentsController.js';
// Hike controller
export default class HikesController {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId); 
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
        //add an instance of our comments class to the controller
    this.comments = new Comments('hikes', 'comments');
  }
  
  showHikeList() {
    
      // the list of hikes will come from the model now...
    const hikeList = this.hikeModel.getAllHikes();
    // send the list of hikes and the element we would like those placed into to the view.
    this.hikesView.renderHikeList(hikeList,this.parentElement );
    // after the hikes have been rendered...add our listener
    this.addHikeListener();
    //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
      // show comments
      this.comments.showCommentList();
  
  }

  showOneHike(hikeName) {
    const hike = this.hikeModel.getHikeByName(hikeName);
    this.hikesView.renderOneHikeFull(
      hike,
      this.parentElement
      
    ).onclick = () => {
      this.showHikeList();
    };

        // show the comments for just this hike
        this.comments.showCommentList(hikeName);
    
  }
  addHikeListener() {
    // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      child.addEventListener('click', e => {
        // why currentTarget instead of target?
        this.showOneHike(e.currentTarget.dataset.name);
      });
    });
  }
}