import HikesController from './HikesController.js';


const controller = new HikesController('hikeList');

   
    window.addEventListener('load', () => {
        controller.showHikeList();

      });
