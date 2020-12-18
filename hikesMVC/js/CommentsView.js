  // commentsView

  export default class CommentsView {
  

  renderCommentList(element, comments) {

    // clear out any comments that might be listed
    element.innerHTML = '';
    // add the new list of comments
    comments.forEach(el => {
      let item = document.createElement('li');
      item.innerHTML = `
              ${el.name}: ${el.comment}
        `;
  
      element.appendChild(item);
    });
  }
}