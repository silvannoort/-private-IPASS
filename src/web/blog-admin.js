const blogPostForm = document.querySelector('#blog-post-form');

blogPostForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const title = blogPostForm.querySelector('#title').value;
  const date = blogPostForm.querySelector('#date').value
  const category = blogPostForm.querySelector('#category').value;
  const content = blogPostForm.querySelector('#content').value;



  blogPostForm.reset();

});
